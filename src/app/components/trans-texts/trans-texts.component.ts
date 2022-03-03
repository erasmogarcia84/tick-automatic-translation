import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiSdlService } from 'src/app/services/api-sdl.service';
import { ApiDeeplService } from 'src/app/services/api-deepl.service';
import { concatMap, tap, repeat } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trans-texts',
  templateUrl: './trans-texts.component.html',
  styleUrls: ['./trans-texts.component.css'],
})
export class TransTextsComponent implements OnInit {
  textForm = new FormGroup({
    translationSourceL: new FormControl(null, Validators.required),
    translationTargetL: new FormControl(null, Validators.required),
    translationText: new FormControl(null, Validators.required),
    translationTargetText: new FormControl(null),
  });

  // private APIBase: string = 'SDL';
  private APIBase: string = 'DEEPL';

  private requestID: string;
  public token;
  public translation: string;
  public statusTranslation: string;
  public translationInProcess: boolean = false;
  public textReadyToCopy: boolean = true;
  public statistics;
  public languagePairs;
  public sourceLangsFull: string[] = [];
  public targetLangsFull: string[] = [];
  public sourceLangsCode = {
    'Bulgarian': "BG",
    'Czech': "CS",
    'Danish': "DA",
    'German': "DE",
    'Greek': "EL",
    'English': "EN",
    'Spanish': "ES",
    'Estonian': "ET",
    'Finnish': "FI",
    'French': "FR",
    'Hungarian': "HU",
    'Italian': "IT",
    'Japanese': "JA",
    'Lithuanian': "LT",
    'Latvian': "LV",
    'Dutch': "NL",
    'Polish': "PL",
    'Portuguese': "PT",
    'Romanian': "RO",
    'Russian': "RU",
    'Slovak': "SK",
    'Slovenian': "SL",
    'Swedish': "SV",
    'Chinese': "ZH",
  };
  public targetLangsCode = {
    'Bulgarian': "BG",
    'Czech': "CS",
    'Danish': "DA",
    'German': "DE",
    'Greek': "EL",
    'English': "EN",
    'Spanish': "ES",
    'Estonian': "ET",
    'Finnish': "FI",
    'French': "FR",
    'Hungarian': "HU",
    'Italian': "IT",
    'Japanese': "JA",
    'Lithuanian': "LT",
    'Latvian': "LV",
    'Dutch': "NL",
    'Polish': "PL",
    'Portuguese': "PT",
    'Romanian': "RO",
    'Russian': "RU",
    'Slovak': "SK",
    'Slovenian': "SL",
    'Swedish': "SV",
    'Chinese': "ZH",
  };
  public sourceLangs: string[] = [];
  public targetLangs: string[] = [];
  public deeplUsage: boolean = false;
  public countDeeplUsage: string = '';

  constructor( private apiSDLService: ApiSdlService,
               private apiDEEPLService: ApiDeeplService ) {}

  ngOnInit(): void {
    this.statusTranslation = '';
    switch (this.APIBase) {
      case 'SDL':
        this.apiSDLService.getToken().subscribe((res) => {
          this.token = res;
          this.apiSDLService.token = this.token.accessToken;
        });
        this.apiSDLService.getLanguagePairs().subscribe((languages) => {
          this.extractLanguages(languages.languagePairs);
        });

        this.textForm.valueChanges.subscribe((value) => {
          console.log(value);
        });
        break;

      case 'DEEPL':
        this.getDeeplUsage();
        this.apiDEEPLService
          .getLanguagePairs()
          .subscribe((languages) => {
            this.extractLanguages(languages);
        });
        break;

      default:
        break;
    }

  }

  extractLanguages(languagePairs) {
    switch (this.APIBase) {

      case 'SDL':
        for (const lang of languagePairs) {
          this.sourceLangsFull.push(lang.sourceLanguageId);
          this.targetLangsFull.push(lang.targetLanguageId);
        }
        this.sourceLangs = Array.from(new Set(this.sourceLangsFull)).sort();
        this.targetLangs = Array.from(new Set(this.targetLangsFull)).sort();
        break;

      case 'DEEPL':
        for (const lang of languagePairs) {
          this.sourceLangsFull.push(lang.name);
          this.targetLangsFull.push(lang.name);
        }
        this.sourceLangs = Array.from(new Set(this.sourceLangsFull)).sort();
        this.targetLangs = Array.from(new Set(this.targetLangsFull)).sort();
        break;

      default:
        break;
    }
  }

  updateTargetLang(e) {
    let lang = e.target.value;
    let cant = 0;
    switch (this.APIBase) {
      case 'SDL':
        if (lang == 'auto') {
          this.targetLangs = Array.from(new Set(this.targetLangsFull)).sort();
          cant = this.targetLangs.length;
        } else {
          this.targetLangs = [];
          for (let l = 0; l < this.sourceLangsFull.length; l++) {
            const element = this.sourceLangsFull[l];
            if (element == lang) {
              this.targetLangs[cant] = this.targetLangsFull[l];
              cant++;
            }
          }
        }
        break;

      default:
        break;
    }
  }

  toTranslate() {
    this.requestID = '';
    this.translation = '';
    this.statusTranslation = '';
    this.translationInProcess = true;
    let text = this.textForm.get('translationText').value;
    let sourceL = this.textForm.get('translationSourceL').value;
    let targetL = this.textForm.get('translationTargetL').value;
    if (text) {
      switch (this.APIBase) {
        case 'SDL':
          this.apiSDLService
          .sendTextToTranslate(text, sourceL, targetL)
          .subscribe((res) => {
            this.requestID = res.requestId;
            if (this.requestID) {
              this.checkStatus(this.requestID);
            } else {
              console.log('ERROR en request');
            }
          });
          break;

        case 'DEEPL':
          this.apiDEEPLService
          .sendTextToTranslate(text, this.sourceLangsCode[sourceL], this.targetLangsCode[targetL])
          .subscribe((res) => {
            this.showTranslation(res.translations[0].text)
          });
          break;

        default:
          break;
      }
    } else {
      alert('El Texto de Entrada NO puede estar vacío');
    }
  }

  checkStatus(requestID: string) {
    let intervalID;
    this.statusTranslation = '';
    intervalID = setInterval(() => {
      this.apiSDLService.checkTranslationStatus( requestID )
        .subscribe( res => {
          this.statusTranslation = res.translationStatus;
          switch ( this.statusTranslation ) {
            case 'DONE':
              clearInterval(intervalID);
              this.statistics = res.translationStats;
              this.translationInProcess = false;
              this.showTranslation( requestID );
            break;
            case 'FAILED':
              clearInterval(intervalID);
              const error = res.errors[0];
              this.translationInProcess = false;
              Swal.fire({
                title: `Error # ${error.code}`,
                text: error.description,
                icon: 'error',
                confirmButtonText: 'Ok'
              });
            break;
          }
        });
    }, 500);
  }

  showTranslation(requestID: string) {
    switch (this.APIBase) {
      case 'SDL':
        this.apiSDLService
        .getTranslation(requestID)
        .subscribe((res) => {
          this.textForm
            .patchValue({
              translationTargetText: res.translation,
            });
        });
        break;

      case 'DEEPL':
        this.translationInProcess = false;
        this.textReadyToCopy = false;
        this.textForm
        .patchValue({
          translationTargetText: requestID
        });
        this.getDeeplUsage();
        break;
      default:
        break;
    }
  }

  getDeeplUsage() {
    this.apiDEEPLService
      .getUsage()
      .subscribe((res) => {
        this.countDeeplUsage = `${res.character_count} / ${res.character_limit}`
      })
  }

  copyToClipboard(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
}
