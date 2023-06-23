import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppComponent';

  @ViewChild(ChildComponent) childComponent: ChildComponent | undefined;

  num = 0;
  F = 0;
  C = 0;

  handleValueChange(event: string, num: number) {
    this.F = Math.round( ( +event * 9/5 + 32 )* 10) / 10;   
  }

  sendDataToChild() {
    const data = this.F;
    console.log('P sendDataToChild:', data);
    this.childComponent?.receiveData1(data);
  }

  // 3

  onInputChange(event: any) {
    const data = event.target.value;
    this.F = Math.round( ( +data * 9/5 + 32 )* 10) / 10;  
    this.childComponent?.receiveData2(this.F);
  }

  // 4

  items = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Alice' }
  ];

  displayId(id: number) {
    console.log(`Selected ID: ${id}`);

    const selectedItems = this.items.find(x => {
      return x.id === id 
    })
    console.table(  selectedItems)

  }
}
