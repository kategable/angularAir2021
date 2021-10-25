import { UserService } from './user.service';
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSettings]'
})
export class SettingsDirective implements OnInit {
  @Input() appSettings: string[] = [];

  constructor(private tmplRef: TemplateRef<any>, private vc: ViewContainerRef, private userService:UserService) { }
  ngOnInit(): void {
    if(this.userService.has(this.appSettings)){
      this.vc.createEmbeddedView(this.tmplRef);
      return;
  }
    this.vc.clear()

  }


}
