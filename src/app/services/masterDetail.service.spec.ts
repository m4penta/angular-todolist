/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MasterDetailService } from './masterDetail.service';

describe('Service: MasterDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterDetailService]
    });
  });

  it('should ...', inject([MasterDetailService], (service: MasterDetailService) => {
    expect(service).toBeTruthy();
  }));
});
