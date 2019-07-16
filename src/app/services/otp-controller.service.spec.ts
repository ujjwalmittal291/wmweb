import { TestBed } from '@angular/core/testing';

import { OtpControllerService } from './otp-controller.service';

describe('OtpControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtpControllerService = TestBed.get(OtpControllerService);
    expect(service).toBeTruthy();
  });
});
