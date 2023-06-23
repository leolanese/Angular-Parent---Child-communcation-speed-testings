import { Component, EventEmitter, Output, ViewChild } from "@angular/core";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent {
  // 1
  receivedData1: number = 0;
  @Output() valueChanged = new EventEmitter<string>();

  onValueChange(event: any) {
    const value = event.target.value;
    this.valueChanged.emit(value);
  }

  receiveData1(data: number) {
    console.log(data)
    this.receivedData1 = data;
  }

  // 2

  receivedData2: number = 0;

  receiveData2(data: number) {
    console.log(data)
    this.receivedData2 = data;
  }

  // 3

  c!: number;
  f!: number;

  change(value: number, field: string) {
    if (field === 'c') {
      this.c = value;
      this.f = (this.c * 9/5) + 32;
    } else if (field === 'f') {
      this.f = value;
      this.c = (this.f - 32) * 5/9;
    }
  }
  
}
