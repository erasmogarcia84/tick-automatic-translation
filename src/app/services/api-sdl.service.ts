import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { saveAs } from 'file-saver';


@Injectable({
  providedIn: 'root'
})
export class ApiSdlService {

  public token: any;

  constructor( private http: HttpClient ) { }

  getToken() {
    const url = '/v4/token';
    const params = {
      "clientId": "yEetEs3H3ok319lEvgojwnRvky4XnY2Y",
      "clientSecret": "qKTK4KLYjpHyxup9JkiLs2lJimy0CKToItPtkmY_ZZ3v0cfRVQwGZj0ZKPedTtZT"
    };
    const options = { headers: new HttpHeaders({
      'Content-type': 'application/json'
    })};
    return this.http.post(url, params, options)
      .pipe(
        tap(_ => console.log('TOKEN loaded')),
        map((value) => value),
        catchError(this.handleError('Error = ', []))
      );
  }

  getLanguagePairs(): Observable<any> {
    const url = '/v4/accounts/38529/subscriptions/language-pairs';
    const options = { headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })};
    return this.http.get(url, options)
      .pipe(
        tap(_ => console.log('LANGUAGES loaded')),
        map((value) => value),
        catchError(this.handleError('Error = ', []))
    );
  }

  sendTextToTranslate( text: string, sourceL: string, targetL : string ): Observable<any> {
    const url = '/v4/mt/translations/async';
    const params = {
      "sourceLanguageId": sourceL,
      "targetLanguageId": targetL,
      "model": "Generic",
      "submissionType": "text",
      "inputFormat": "PLAIN",
      "translationMode": "quality",
      "input":[ text ]
    }
    const options = { headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })};
    return this.http.post(url, params, options)
      .pipe(
        tap(_ => console.log('TRANSLATIONS sent')),
        map((value) => value),
        catchError(this.handleError('Error = ', []))
    );
  }

  sendFileToTranslate( file: File,  fileType: string, sourceL: string, targetL: string): Observable<any> {
    console.log('FILEEEEEEE', file);
    const url = '/v4/mt/translations/async';
    const fd = new FormData();
    fd.append('sourceLanguageId', sourceL);
    fd.append('targetLanguageId', targetL);
    fd.append('model','Generic');
    fd.append('translationMode', 'quality');
    fd.append('input', file);
    fd.append('inputFormat', fileType);
    let params = new HttpParams();

    const options = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
      params: params,
      reportProgress: true,
      withCredentials: true,
    }
    return this.http.post(url, fd, options)
    .pipe(
      tap(_ => console.log('UPLOADING file')),
      map((value) => value),
      catchError(this.handleError('Error = ', []))
    );
  }


  checkTranslationStatus( requestID: string ): Observable<any> {
    const url = `/v4/mt/translations/async/${requestID}`;
    const options = { headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })};
    return this.http.get(url, options)
      .pipe(
        tap(_ => console.log('CHECKING STATUS')),
        map((value) => value),
        catchError(this.handleError('Error = ', []))
    );
  }

  getFileTranslated( requestID: string, fileType: string ) {
    console.log('GOING TO DOWNLOAD...');
    const url = `/v4/mt/translations/async/${requestID}/content`;
    const options = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
      responseType: 'blob' as 'json',
    }
    this.http.get(url, options)
    .subscribe(response => {
      const blob = new Blob([response as BlobPart], { type: fileType });
      console.log('BLOB -->', blob);
      const url= window.URL.createObjectURL(blob);
      console.log('URL-->', url);
      window.open(url);
    });
    }

  getTranslation( requestID: string ): Observable<any> {
    const url = `/v4/mt/translations/async/${requestID}/content`;
    const options = { headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })};
    return this.http.get(url, options)
      .pipe(
        tap(_ => console.log('TRANSLATION done')),
        map((value) => value),
        catchError(this.handleError('Error = ', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

}
