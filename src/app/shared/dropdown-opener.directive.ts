import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdownOpener]'
})
export class DropdownOpenerDirective {

  // @HostBinding('data-toggle="dropdown"')isOpen = false;

  constructor(private elemnt:ElementRef) { }

  @HostListener('click')
  openDropDown(){

    console.log(this.elemnt);
  }

}
