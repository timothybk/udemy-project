import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() optionClicked = new EventEmitter<string>()
  

  constructor() { }

  ngOnInit() {
  }
  
  onSelected(clickData: string){
    this.optionClicked.emit(clickData)
  }

}
