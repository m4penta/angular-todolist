/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocalDataServices } from './localData.ts.service';


describe('Service: LocalData.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalDataServices]
    });
  });

  it('should ...', inject([LocalDataServices], (service: LocalDataServices) => {
    expect(service).toBeTruthy();
  }));
});
