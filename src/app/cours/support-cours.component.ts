import { Component, OnInit } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { FileSelectDirective, FileDropDirective, FileUploader, FileUploadModule } from 'ng2-file-upload';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { SectionService } from 'app/cours/section.service';
import { Section } from 'app/cours/section.modal';
import { Support } from 'app/cours/support.modal';
import { SupportCoursService } from 'app/cours/support-cours.service';


@Component({
  selector: 'app-upload-file',
  templateUrl: './support-cours.component.html',

})

export class SupportCoursComponent implements OnInit {

  URL = 'http://localhost:8080/api/cours/section/support';

  subscription: Subscription;
  varGlobal: any;
  FileUploader: any;
  uploader: any;
 // section = new Section();
    Section : {};

  supports: Support[];
    support: Support;

  errorMessage: string = '';
  constructor(private route: ActivatedRoute, private sectionService: SectionService, private supportCoursService: SupportCoursService) { }
  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.varGlobal = params['id'];
       this.uploader = new FileUploader({
        url: `${this.URL}/${this.varGlobal}`

     });

      //  this.sectionService.findSectionSupportById(this.varGlobal).subscribe(section => {
      //  this.Section = section;
      //  });
    });

    //this.getAllCourses();
  }









  getAllCourses() {
    this.supportCoursService.getAllSupports()
      .subscribe(
      supports => this.supports = supports,
      error => this.errorMessage = <any>error);
  }

   public hasBaseDropZoneOver: boolean = false;
 public hasAnotherDropZoneOver: boolean = false;

   public fileOverBase(e: any): void {
     this.hasBaseDropZoneOver = e;
   }

   public fileOverAnother(e: any): void {
     this.hasAnotherDropZoneOver = e;
   }



}


