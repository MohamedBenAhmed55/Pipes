import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  // disables the cache mechanism for this pipe to always reflect changes in the input array, the tradeof is that the pipe will be executed a lot
  // because with caching we watch the reference of our input value, and if the reference doesn't change we don't re-execute the pipe
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc') {
    const sorted = [...value];
    sorted.sort((a,b) => {
      if(direction === 'asc'){
        return a > b ? 1 : -1;
      }else {
        return a > b ? -1 : 1;
      }
    });
    return sorted;
  }

}
