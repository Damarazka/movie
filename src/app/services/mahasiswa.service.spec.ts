import { TestBed } from '@angular/core/testing';

import { MahasiswaService } from './mahasiswa.service';

describe('MahasiswaService', () => {
  let service: MahasiswaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MahasiswaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
