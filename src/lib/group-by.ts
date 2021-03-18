import { Injectable, Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'groupBy'
})
@Injectable()
export class GroupBy implements PipeTransform {

  constructor() {}

  public transform(value: Array<any>, field: string): Array<any> {
    const groupedObj = value.reduce((prev, cur)=> {
      if(!prev[cur[field]]) {
        prev[cur[field]] = [cur];
      } else {
        prev[cur[field]].push(cur);
      }
      return prev;
    }, {});
    return Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] }));
  }

}
