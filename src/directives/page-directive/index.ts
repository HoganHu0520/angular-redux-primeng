import { Directive, HostListener } from '@angular/core';

const footerHeight = 60;

@Directive({
  selector: '[page-directive]',
  host: {
    '[style.min-height]': 'minHeight'
  }
})
export default class PageDirective {
  _minHeight = 1;
  constructor() {
    this._minHeight = getMinHeight();
  }

  get minHeight() {
    return `${this._minHeight}px`;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._minHeight = getMinHeight();
  }
}

function getMinHeight(): number {
  let footHeight = 2 * 16;
  return window.innerHeight;
    // - footHeight; // Delete footer height
}
