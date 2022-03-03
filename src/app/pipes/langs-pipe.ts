import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'langsPipe'
})
export class LangsPipe implements PipeTransform {

  private langChars = [
    'afr','alb','amh','ara','arz','arm','aze','baq','bel','ben','bih','bul','cat','ceb','chr','chi','cht','hrv','cze','dan','fad','dut','eng','est','fin','fra','frc','glg','lug','geo','ger','gre','guj','hau','heb','hin','hmn','hun','ice','ind','iku','gle','ita','jpn','jav','kan','kin','kor','lav','lif','lit','mac','may','mal','mlt','mar','nep','nor','ori','oss','pus','per','pol','por','ptb','ptp','rum','rus','srp','slo','slv','som','spa','sun','swa','swe','syr','tgl','tgk','tam','tel','tha','tur','ukr','urd','uzb','vie','wel','yid'
  ];

  private langShort = [
    'af','sq','am','ar','ar-arabizi','hy','az','eu','be','bn','bh','bg','ca','ceb','chr','zh-Hans','zh-Hant','hr','cs','da','prs-AF','nl','en','et','fi','fr','fr-CA','gl','lg','ka','de','el','gu','ha','he','hi','hmn','hu','is','id','iu','ga','it','ja','jv','kn','rw','ko','lv','lif','lt','mk','ms','ml','mt','mr','ne','no','or','os','ps','fa','pl','pt','pt-BR','pt-PT','ro','ru','sr','sk','sl','so','es','su','sw','sv','syr','tl','tg','ta','te','th','tr','uk','ur','uz','vi','cy','yi'
  ];

  private langLong = [
    'Africaans','Albanés','Amárico','Arábica','Árabe (Arabizi)','Armenio','Azerbaiyano','Vasco','Bielorruso','Bengalí','Bihari','Búlgaro','Catalán','Cebuano','Cherokee','Chino simplificado)','Chino (tradicional)','Croata','Checo','Danés','Dari','Holandés','Inglés','Estonio','Finlandés','Francés','Francés (Canadá)','Gallego','Ganda','Georgiano','Alemán','Griego','Gujarati','Hausa','Hebreo','Hindi','Hmong','Húngaro','Islandés','Indonesio','Inuktitut','Irlandesa','Italiano','Japonés','Javanés','Kannada','Kinyarwanda','Coreano','Letón','Limbu','Lituano','Macedónio','Malayo','Malayalam','Maltés','Marathi','Nepalí','Noruego','Oriya','Osetio','Pashto','Persa','Polaco','Portugués','Portugués (Brasil)','Portugués (portugal)','Rumano','Ruso','Serbio','Eslovaco','Esloveno','Somalí','Español','Sundanés','Swahili','Sueco','Siríaco','Tagalo','Tayiko','Tamil','Telugu','Tailandés','Turco','Ucranio','Urdu','Uzbeko','Vietnamita','Galés','Yídish'
  ];

  transform(value: string): string {
    const result = this.langChars.indexOf(value);
    if (result == -1) {
      // en caso de no encontrar coincidencia con los idiomas aqui almacenados
      return value;
    } else {
      return this.langLong[result];
    }
  }

}
