import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAdminPortalComponent } from './report-admin-portal.component';

describe('ReportAdminPortalComponent', () => {
  let component: ReportAdminPortalComponent;
  let fixture: ComponentFixture<ReportAdminPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAdminPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAdminPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
