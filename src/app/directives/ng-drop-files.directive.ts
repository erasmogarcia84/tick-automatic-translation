import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';


@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() selectedFile: File;
  @Output() mouseOnArea: EventEmitter<boolean> = new EventEmitter;

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter( event: any ) {
    this.mouseOnArea.emit( true );
    this._preventStop( event );
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave( event: any ) {
    this.mouseOnArea.emit( false );
  }

  @HostListener('drop', ['$event'])
  public onDrop( event: any ) {
    const transfer = this._getTransfer( event );
    if ( !transfer ) {
      return;
    }
    this._extractFiles ( transfer.files );
    this._preventStop( event )
    this.mouseOnArea.emit( false );

  }

  private _getTransfer( event: any ) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _extractFiles( listFiles: FileList ) {
    for ( const properties in Object.getOwnPropertyNames( listFiles )) {
      const tempFile = listFiles[properties];
      if ( this._fileCanBeUploaded( tempFile )) {
        this.selectedFile = tempFile;
      }
    }
    console.log(this.selectedFile);
  }

  // Validaciones
  private _fileCanBeUploaded( file: File ): boolean {
    if (this._fileFormat( file.type )) {
      return true;
    } else {
      return false;
    }
  }

  private _preventStop( event ) {
    event.preventDefault();
    event.stopPropagation();
  }


  // esta Validación es sólo para imágenes, pero no lo voy a utilizar.
  // TO DO - incluir sólo formatos permisibles.
  private _fileFormat( typeFile: string ): boolean {
    // return ( typeFile === '' || typeFile === undefined ) ? false : typeFile.startsWith('image');
    return ( typeFile === '' || typeFile === undefined ) ? false : true;
  }

}
