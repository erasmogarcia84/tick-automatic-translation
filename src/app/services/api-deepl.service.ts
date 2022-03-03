import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDeeplService {
  private authKey = 'c34b7b82-94ce-276c-25a2-23d4f6a14da1:fx';
  private baseApiUrl = 'https://file.io';

  constructor( private http: HttpClient ) { }

  getLanguagePairs(): Observable<any> {
    const url = `https://api-free.deepl.com/v2/languages?auth_key=${this.authKey}`;
    const options = { headers: new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded'
    })};
    return this.http.get(url, options)
      .pipe(
        // tap(_ => console.log('LANGUAGES loaded')),
        map((value) => value),
        catchError(this.handleError('Error = ', []))
    );
  }

  sendTextToTranslate( text: string, sourceL: string, targetL : string ): Observable<any> {
    let url = '';
    if (sourceL) {
      url = `https://api-free.deepl.com/v2/translate?auth_key=${this.authKey}&text=${text}&source_lang=${sourceL}&target_lang=${targetL}`;
      console.log(url);
    } else {
      url = `https://api-free.deepl.com/v2/translate?auth_key=${this.authKey}&text=${text}&target_lang=${targetL}`;
      console.log(url);
    }
    const options = { headers: new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded'
    })};
    return this.http.get(url, options)
      .pipe(
        // tap(_ => console.log('TRANSLATIONS sent')),
        map((value) => value),
        catchError(this.handleError('Error = ', []))
    );
  }

  upload(file):Observable<any> {
    // Create form data
    const formData = new FormData();
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl, formData)
  }

  sendFileToTranslate( file: File,  fileType: string, sourceL: string, targetL: string): Observable<any> {

    const url = 'https://api-free.deepl.com/v2/document';
    const fd = new FormData();
    fd.append('file', file, fileType);
    fd.append('auth_key', this.authKey);
    if (sourceL) { fd.append('source_lang', sourceL); }
    fd.append('target_lang', targetL);

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
      }),
    };

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
      headers: new HttpHeaders(),
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

  getUsage(): Observable<any> {
    const url = `https://api-free.deepl.com/v2/usage?auth_key=${this.authKey}`;
    const options = { headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })};
    return this.http.get(url, options)
      .pipe(
        // tap(_ => console.log('')),
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
