import { UserService } from './user.service';
import { DatePipe } from '@angular/common';
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenew]',
})
export class RenewDirective  implements OnInit{
  constructor(private readonly el:ElementRef,private readonly renderer:Renderer2, private readonly userservice: UserService) {

  }
  async ngOnInit(): Promise<void> {

    if (await this.userservice.needsRenewFlag()) {
      this.renderer.addClass(this.el.nativeElement, 'renew');
      this.renderer.setProperty(this.el.nativeElement, 'textContent', `Renew by ${this.userservice.renewDate} `);
    }
  }
}
