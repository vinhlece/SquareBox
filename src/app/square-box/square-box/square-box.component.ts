import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-box',
  templateUrl: './square-box.component.html',
  styleUrls: ['./square-box.component.scss']
})
export class SquareBoxComponent implements OnInit {
  //#region Input
  @Input() top: number; // for top
  @Input() left: number; // for left
  @Input() speed: number; // for speed
  //#endregion

  constructor() { }

  ngOnInit() {
  }

  /**
   * Func: set position for square
   */
  setPosition() {
    // check any change from top/left
    if (this.top && this.left) {
      return {
        'transition-duration': this.speed + 's',
        top: this.top + 'px',
        left: this.left + 'px'
      };
    }
    return {};
  }

}
