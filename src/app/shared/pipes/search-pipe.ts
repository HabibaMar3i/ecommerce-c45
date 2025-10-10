import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any[], search:string): object[] {
    return arr.filter((item)=>item.title?.toLowerCase().includes(search.toLowerCase()));
  }
}
