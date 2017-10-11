import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myNewPipe'
})
export class MyNewPipePipe implements PipeTransform {
transform(items: any, filter?: any): any {


    if (!items || !filter) {
      return items;
    }

    return items.filter(item => item.NotesCours.indexOf(filter) !== -1);
  }


}
