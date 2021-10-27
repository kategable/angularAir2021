import { UserService } from './user.service';
import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appFilters]',
})
export class FiltersDirective {
  private _appFilters: string[] = [];

  @Input() set appFilters(value: string[]) {
    this._appFilters = value;
    if (this.userService.hasFilters(this._appFilters)) {
      this.vc.clear();
      this.vc.createEmbeddedView(this.tmplRef);
    }else{
      this.vc.clear();
    }
  }
  get appFilters() {
    return this._appFilters;
  }

  constructor(
    private tmplRef: TemplateRef<any>,
    private vc: ViewContainerRef,
    private userService: UserService
  ) {}
}
