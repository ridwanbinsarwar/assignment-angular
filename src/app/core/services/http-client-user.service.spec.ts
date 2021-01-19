import { TestBed } from '@angular/core/testing';

import { HttpClientUserService } from './http-client-user.service';

describe('HttpClientUserService', () => {
  let service: HttpClientUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
