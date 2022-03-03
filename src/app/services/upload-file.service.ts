import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private FILE_FOLDER = 'Files';

  constructor( private db: AngularFirestore ) { }

  private saveFiles( file: { nameFile: string, url: string } ) {
    this.db.collection(`/${ this.FILE_FOLDER }`)
           .add( file );
  }

  public uploadFiles( files: FileItem[] ) {
    const storageRef = firebase.storage().ref();
    for  (const item of files ) {
      item.isUploading = true;
      if ( item.progress >= 100 ) {
        continue;
      }
      const uploadTask: firebase.storage.UploadTask =
              storageRef.child(`${this.FILE_FOLDER}/${item.nameSourceFile}`)
                        .put( item.sourceFile );

      uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
        ( snapshot: firebase.storage.UploadTaskSnapshot ) =>
                    item.progress = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100,
        ( error ) => console.error('Error uploading ', error),
        () => {
          console.log('File upload successfully!');
          uploadTask.snapshot.ref.getDownloadURL()
            .then( downloadURL => {
              console.log('El archivo está en... ', downloadURL);
              item.urlSourceFile = downloadURL;
              item.isUploading = false;
              console.log(item);
              this.saveFiles( {
                nameFile: item.nameSourceFile,
                url: item.urlSourceFile
              });
          })
        }
      )
    }
  }
}
