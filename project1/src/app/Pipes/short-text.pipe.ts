import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(value: string, length:number): string {
    let index;
    if(value.length>length){
       index = value.indexOf(" ",length);
    }
    else{
       index = length;
    }
    
   
    
    return value.substring(0,index)+"...";
  }

}
