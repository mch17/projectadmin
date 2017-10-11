import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debdoub',
  templateUrl: './debdoub.component.html',
  styleUrls: ['./debdoub.component.css']
})
export class DebdoubComponent {
 private filterNoteValue=0;

  private listeCours=
     [
      {
        "id": 1,
        "NomCours": "cours1",
        "NotesCours": "1"
      },
      {
        "id": 2,
        "NomCours": "cours2",
        "NotesCours": "4"
      },
      {
        "id": 3,
        "NomCours": "cours3",
        "NotesCours": "2"
      },
      {
        "id": 4,
        "NomCours": "cours4",
        "NotesCours": "1"
      },
      {
        "id": 5,
        "NomCours": "cours5",
        "NotesCours": "3"
      },
       {
         "id": 6,
         "NomCours": "cours6",
         "NotesCours": "4"
       },
       {
         "id": 7,
         "NomCours": "cours7",
         "NotesCours": "5"
       }
    ];


  changed(value){
    this.filterNoteValue=value;
  }
}
