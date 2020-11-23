import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-square-box-container',
  templateUrl: './square-box-container.component.html',
  styleUrls: ['./square-box-container.component.scss']
})
export class SquareBoxContainerComponent implements OnInit {
  //#region  inputData
  squareBoxForm: FormGroup; // for form group
  top: number; // input top
  left: number; // input left
  speed: number; // input speed
  //#endregion

  constructor() { }

  ngOnInit() {
    this.squareBoxForm = new FormGroup({
      speed: new FormControl(1, [ Validators.required ])
    });
  }

  /**
   * Func: event click on the box
   */
  choosePosition(event: any) {
    // check valid input
    if (this.squareBoxForm.get('speed').valid) {
      this.speed = this.squareBoxForm.get('speed').value;
      this.left = event.clientX;
      this.top = event.clientY  - 10;
    }
  }

}
