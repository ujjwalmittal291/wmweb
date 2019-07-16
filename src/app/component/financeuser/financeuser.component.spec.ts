import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceUserComponent } from './financeuser.component';

describe('FinanceuserComponent', () => {
  let component: FinanceUserComponent;
  let fixture: ComponentFixture<FinanceUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
