import { HighlightdataDirective } from './highlightdata.directive';
import { element } from 'protractor';
import { ElementRef } from '@angular/core';

describe('HighlightdataDirective', () => {
  it('should create an instance', () => {
    
    const directive = new HighlightdataDirective(null);
    expect(directive).toBeTruthy();
  });
});
