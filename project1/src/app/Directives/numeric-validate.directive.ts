
import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appNumericValidate]'
  
})
export class NumericValidateDirective {
  @HostListener('change')
  onChange(){
    let flag;
    if(this.element.nativeElement.value.length<9 || this.element.nativeElement.value.length>10){
      this.element.nativeElement.style.border = '1px solid red'
    }
   for (let index = 0; index < this.element.nativeElement.value.length; index++) {
    const char = this.element.nativeElement.value[index];
      if(char <'0' || char > '9' ) {
        this.element.nativeElement.style.border = '1px solid red'
        flag = true;
      }
   }
   if(!flag && (this.element.nativeElement.value.length === 9 || this.element.nativeElement.value.length === 10)) {
    this.element.nativeElement.style.border = '1px solid white'
   }
  //  alert(this.element.nativeElement.value);
  // if(!this.element.nativeElement.valid){
  //   alert(this.element.nativeElement.validation);
  // }
  // else{
  //   alert('Please enter a not valid');
  // }
  
  }
  

  constructor(public element: ElementRef) {

   }
 

}
