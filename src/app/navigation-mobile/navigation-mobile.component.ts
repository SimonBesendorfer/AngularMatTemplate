import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile.component.html',
  styleUrls: ['./navigation-mobile.component.scss']
})
export class NavigationMobileComponent implements OnInit {

  constructor() { }

  showMenue = false;

  ngOnInit(): void {
  }

  openMenue() {
    console.log(this.showMenue);

    if (!this.showMenue) {
      this.showMenue = true;
    } else {
      this.showMenue = false;
    }
    
    console.log(this.showMenue);
  }

}
