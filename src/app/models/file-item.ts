export class FileItem{

  public sourceFile: File;
  public nameSourceFile: string;
  public urlSourceFile: string;
  public isUploading: boolean;
  public progress: number;

  constructor( sourceFile: File ) {

    this.sourceFile = sourceFile;
    this.nameSourceFile = sourceFile.name;
    this.isUploading = false;
    this.progress = 0;

  }

}
