/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorldService } from './world.service';

describe('Service: World', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorldService]
    });
  });

  it('should ...', inject([WorldService], (service: WorldService) => {
    expect(service).toBeTruthy();
  }));
});
