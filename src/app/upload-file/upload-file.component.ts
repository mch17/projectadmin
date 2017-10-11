
import {Component} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';
import { FileSelectDirective, FileDropDirective, FileUploader ,FileUploadModule} from 'ng2-file-upload';

const URL = 'http://localhost:8080/api/k';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],

})
export class UploadFileComponent {

 public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
