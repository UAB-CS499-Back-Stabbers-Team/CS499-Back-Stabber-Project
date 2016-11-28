/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MoralRuleService } from './moral-rule.service';

describe('Service: MoralRule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoralRuleService]
    });
  });

  it('should ...', inject([MoralRuleService], (service: MoralRuleService) => {
    expect(service).toBeTruthy();
  }));
});
