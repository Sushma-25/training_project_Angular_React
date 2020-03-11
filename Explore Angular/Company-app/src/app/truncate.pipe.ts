import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Injectable()
@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
  // const charCount=20;
  // console.log(value);
  
  // return value.substring(0,charCount)+"...";
const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
const trail = args.length > 1 ? args[1] : "...";
return value.length > limit ? value.substring(0, limit) + trail : value;
   
  }

}
