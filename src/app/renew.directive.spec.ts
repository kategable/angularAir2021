import { UserService } from './user.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { RenewDirective } from './renew.directive';
const ddd = '11/12/13';
const result = 'Renew by 11/12/13 ';

class mockservice {
  needsRenew = true;
  async needsRenewFlag(): Promise<boolean> {
    return Promise.resolve(true);
  }
  get renewDate(): string | null {
    return ddd;
  }
}
const mock = new mockservice();
@Component({
  template: `<span #container appRenew> </span>`,
})
class TestComponent {
  @ViewChild('container', { static: false }) container!: ElementRef;
}
describe('RenewDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
     TestBed.configureTestingModule({
      declarations: [RenewDirective, TestComponent],
      providers: [{ provide: UserService, useClass: mock }],
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });
  it('should have test date', () => {
    expect(component.container.nativeElement.textContent).toBe(result);
  });

  fit(
    'should display date',
    waitForAsync(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(component.container.nativeElement.textContent).toBe(result);
      });
    })
  );
  it(
    'should display date whenStable()',
    waitForAsync(() => {
      fixture.whenStable().then(() => {
        expect(component.container.nativeElement.textContent).toBe(result);
      });
    })
  );
});
