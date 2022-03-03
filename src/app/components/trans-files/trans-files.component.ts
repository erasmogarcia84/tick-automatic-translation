import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiSdlService } from 'src/app/services/api-sdl.service';
import { ApiDeeplService } from 'src/app/services/api-deepl.service';
import { FileItem } from 'src/app/models/file-item';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trans-files',
  templateUrl: './trans-files.component.html',
  styleUrls: ['./trans-files.component.css'],
})
export class TransFilesComponent implements OnInit {
  fileForm = new FormGroup({
    translationSourceL: new FormControl(null, Validators.required),
    translationTargetL: new FormControl(null, Validators.required),
    selectedFile: new FormControl(null, Validators.required),
  });

  // private APIBase: string = 'SDL';
  public APIBase: string = 'DEEPL';

  private requestID: string;
  public token;
  public translation: string;
  public statusTranslation: string;
  public translationInProcess: boolean = false;
  public statistics;
  //public files: FileItem[]=[];
  public isOverElement: boolean = false;
  public nameTraducido = 'Test1-FR.docx';
  public languagePairs;
  public sourceLangsFull: string[] = [];
  public targetLangsFull: string[] = [];
  public sourceLangs: string[] = [];
  public targetLangs: string[] = [];
  public translationSourceL: string;
  public translationTargetL: string;

  public selectedFile: File = null;
  public selectedFileTypeIn: string = '';
  public selectedFileTypeOut: string = '';
  public formatIndex: number = null;
  public isTranslated: boolean = false;
  public isFileReady: boolean = false;
  public readyID: string = '';
  public readyTypeOut: string = '';
  public outputFileName: string = '';

  public inputFormatsName = [
    'PLAIN',
    'XLINE',
    'HTML',
    'XML',
    'SDLXML',
    'TMX',
    'XLIFF',
    'BCM',
    'PDF',
    'RTF',
    'DOCX',
    'XLSX',
    'PPTX',
    'DOC',
    'XLS',
    'PPT',
    'ODT',
    'ODS',
    'ODP',
    'GIF',
    'JPG',
    'PNG',
  ];
  public inputFormatsIn = [
    'text/plain',
    'text/x-line',
    'text/html',
    'text/xml',
    'text/sdlxml',
    'text/x-tmx',
    'application/x-xliff',
    'application/x-json-bcm',
    'application/pdf',
    'application/rtf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/msword',
    'application/vnd.ms-excel',
    'application/vnd.ms-powerpoint',
    'application/vnd.oasis.opendocument.text',
    'application/vnd.oasis.opendocument.spreadsheet',
    'application/vnd.oasis.opendocument.presentation',
    'image/gif',
    'image/jpeg',
    'image/png',
  ];
  public inputFormatsOut = [
    'text/plain',
    'text/x-line',
    'text/html',
    'text/xml',
    'text/sdlxml',
    'text/x-tmx',
    'application/x-xliff',
    'application/x-json-bcm',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/rtf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/msword',
    'application/vnd.ms-excel',
    'application/vnd.ms-powerpoint',
    'application/vnd.oasis.opendocument.text',
    'application/vnd.oasis.opendocument.spreadsheet',
    'application/vnd.oasis.opendocument.presentation',
    'text/plain',
    'text/plain',
    'text/plain',
  ];
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
  public countDeeplUsage: string = '';

  constructor(
    private apiSDLService: ApiSdlService,
    private apiDEEPLService: ApiDeeplService,
    public uploadFileService: UploadFileService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.translation = '';
    switch (this.APIBase) {
      case 'SDL':
        this.apiSDLService.getToken().subscribe((res) => {
          this.token = res;
          this.apiSDLService.token = this.token.accessToken;
          this.getLanguagePairs();
        });
        this.fileForm.valueChanges.subscribe((value) => {
          console.log('FORM UPDATED ->');
          console.log(value);
        });
        break;

      case 'DEEPL':
        console.log('DEEPL');
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

  getLanguagePairs(): void {
    this.apiSDLService.getLanguagePairs().subscribe((languages) => {
      this.extractLanguages(languages.languagePairs);
      console.log(languages.languagePairs);
    });
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
    console.log('IDIOMAS ENTRADA => ', this.sourceLangs);
    console.log('IDIOMAS SALIDA => ', this.targetLangs);
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
          console.log('GO TO UPDATE LANGS', lang);
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
    // console.log(cant, 'combinaciones => ', this.targetLangs);
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log('INPUT FILE => ', event);

        /*
    const reader = new FileReader();
    reader.readAsDataURL(e.target.value);
    console.log('READER => ', reader);

    const myFile = new Blob([reader.result], { type: fileType });
    console.log('MYFILE => ', myFile);

    const myUrl = window.URL.createObjectURL(myFile);
    console.log('MYURL => ', myUrl);
    */
   switch (this.APIBase) {

     case 'SDL':
      this.formatIndex = this.inputFormatsIn.indexOf(this.selectedFile.type);
      this.selectedFileTypeIn = this.inputFormatsName[this.formatIndex];
      this.selectedFileTypeOut = this.inputFormatsOut[this.formatIndex];
      break;

     case 'DEEPL':
       /*
      let localUrl: any[];
      if (event.target.files && event.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (event: any) => {
            localUrl = event.target.result;
            console.log('LOCAL_URL => ', localUrl);
            console.log('READER (in) => ', reader);
        }
        console.log('WEBKITRELATIVEPATH => ', event.target.files[0].webkitRelativePath);
        this.selectedFileTypeIn = event.target.files[0].webkitRelativePath;

        reader.readAsDataURL(event.target.files[0]);
        // console.log('READER (out) => ', reader.readAsDataURL(event.target.files[0]));

        const myFile = new Blob([reader.result], { type: event.target.files[0].type });
        console.log('MYFILE => ', myFile);

        const myUrl = window.URL.createObjectURL(myFile);
        console.log('MYURL => ', myUrl);
      }
      */
      console.log('UPLOAD_FILE_TO_API => ', this.selectedFile);
      this.apiDEEPLService
        .upload(this.selectedFile)
        .subscribe((event: any) => {
          if (typeof (event) === 'object') {
              console.log('EVENT_LINK => ', event.link);
              this.selectedFileTypeIn = event.link;
              this.selectedFileTypeOut = event.link;
          }
        });
      break;

     default:
       break;
   }
    console.log('FILE -->', this.selectedFileTypeIn, this.selectedFile);
  }

  createFileName(filename, lang): string {
    let outputFileName = '';
    let separator = filename.lastIndexOf(".");
    let name = filename.slice(0, separator);
    let ext = filename.slice(-(filename.length - separator)).toLowerCase();
    lang = lang.toUpperCase();
    switch (ext) {
      case '.pdf':
          outputFileName = `${name}-${lang}.docx`;
        break;
      case '.gif':
      case '.png':
      case '.jpg':
      case '.jpeg':
          outputFileName = `${name}-${lang}.txt`;
        break;

      default:
          outputFileName = `${name}-${lang}${ext}`;
        break;
    }
    console.log(filename, '======>', outputFileName);
    return outputFileName;
  }

  uploadAndTranslate() {
    this.statistics = null;
    this.isFileReady = false;
    this.translationInProcess = true;
    let sourceL = this.fileForm.get("translationSourceL").value;
    let targetL = this.fileForm.get("translationTargetL").value;
    console.log('FORM UPLOAD -> ', sourceL, '>', targetL, this.selectedFile);

    switch (this.APIBase) {
      case 'SDL':
        this.outputFileName = this.createFileName(this.selectedFile.name, targetL);
        this.apiSDLService
          .sendFileToTranslate(
            this.selectedFile,
            this.selectedFileTypeIn,
            sourceL,
            targetL
          )
          .subscribe((data) => {
            this.requestID = data.requestId;
            this.checkStatus(this.requestID);
          });
        break;

      case 'DEEPL':
        this.outputFileName = this.createFileName(this.selectedFile.name, this.targetLangsCode[targetL]);
        this.apiDEEPLService
          .sendFileToTranslate(
            this.selectedFile,
            this.selectedFileTypeIn,
            this.sourceLangsCode[sourceL],
            this.targetLangsCode[targetL]
          )
          .subscribe((data) => {
            console.log(data);
            this.checkStatus('');
          })
        break;

      default:
        break;
    }


  }

  checkStatus(requestID: string) {
    let intervalID;
    let contador = 0;
    this.statusTranslation = '';
    switch (this.APIBase) {
      case 'SDL':
        intervalID = setInterval(() => {
          this.apiSDLService.checkTranslationStatus(requestID)
            .subscribe((res) => {
              this.statusTranslation = res.translationStatus;
              switch (this.statusTranslation) {
                case 'DONE':
                  clearInterval(intervalID);
                  this.statistics = res.translationStats;
                  this.translationInProcess = false;
                  this.isFileReady = true;
                  this.readyID = this.requestID;
                  this.readyTypeOut = this.selectedFileTypeOut;
                  break;
                case 'FAILED':
                  clearInterval(intervalID);
                  this.translationInProcess = false;
                  const error = res.errors[0];
                  Swal.fire({
                    title: `Error # ${error.code}`,
                    text: error.description,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
                break;
              }
            });
          }, 500);

        break;

        case 'DEEPL':
          intervalID = setInterval(() => {
            this.statusTranslation = 'DONE';
            this.statistics = 'DONE';
            this.translationInProcess = false;
            this.isFileReady = true;
            this.readyID = this.requestID;
            this.readyTypeOut = this.selectedFileTypeOut;
            }, 500);

          break;

      default:
        break;
    }
  }

  getFile() {
    switch (this.APIBase) {
      case 'SDL':
        this.apiSDLService.getFileTranslated(
          this.readyID,
          this.readyTypeOut
        );
        break;

      case 'DEEPL':
        console.log('SELECTEDFILETYPEOUT => ', this.selectedFileTypeOut)
        break;

      default:
        break;
    }
  }

  showTranslation(requestID: string) {
    this.apiSDLService.getTranslation(requestID).subscribe((res) => {
      console.log('TEXTO TRADUCIDO -> ', res);
      this.translation = res.translation;
    });
  }

  cleanFiles() {
    this.selectedFile = null;
  }

  getDeeplUsage() {
    this.apiDEEPLService
      .getUsage()
      .subscribe((res) => {
        this.countDeeplUsage = `${res.character_count} / ${res.character_limit}`
      })
  }

}
