import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-reader',
  templateUrl: './pdf-reader.component.html',
  styleUrls: ['./pdf-reader.component.css']
})
export class PdfReaderComponent  {

  constructor() { }

  page: number = 1;

}
