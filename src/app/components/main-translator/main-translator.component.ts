import { Component, OnInit } from '@angular/core';
import { ApiSdlService } from 'src/app/services/api-sdl.service';

@Component({
  selector: 'app-main-translator',
  templateUrl: './main-translator.component.html',
  styleUrls: ['./main-translator.component.css']
})
export class MainTranslatorComponent implements OnInit {
  public APIBase = 'DEEPL';
  public token;

  constructor( public apiSDLService: ApiSdlService ) { }

  ngOnInit(): void {
    switch (this.APIBase) {
      case 'SDL':
        this.apiSDLService.getToken()
        .subscribe( res => {
          this.token = res;
          this.apiSDLService.token = this.token.accessToken;
          // console.log('TOKEN =>', this.token.accessToken);
        });
        break;

      default:
        break;
    }
  }

}
