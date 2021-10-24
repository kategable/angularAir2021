import { UserService } from './user.service';
import { DatePipe } from '@angular/common';
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenew]',
})
export class RenewDirective  {
  constructor(el:ElementRef,renderer:Renderer2, userservice: UserService) {
    if(userservice.needsRenew){
      renderer.addClass(el.nativeElement, 'renew');
      renderer.setProperty(el.nativeElement,'textContent',`Renew by ${userservice.renewDate} `)
    }
     }
}
