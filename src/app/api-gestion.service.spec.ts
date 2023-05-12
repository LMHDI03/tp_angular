import { TestBed } from '@angular/core/testing';

import { ApiGestionService } from './api-gestion.service';

describe('ApiGestionService', () => {
  let service: ApiGestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
