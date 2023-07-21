import { TestBed } from '@angular/core/testing';

import { ReadFileExcelService } from './read-file-excel.service';

describe('ReadFileExcelService', () => {
  let service: ReadFileExcelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadFileExcelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
