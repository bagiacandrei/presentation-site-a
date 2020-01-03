import {Component} from "@angular/core";

const PATH_LOCATION = "../assets/images/";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'third-app';
  items = [];

  constructor() {
    this.formItems()

  }

  formItems() {
    for (var i = 1; i < 5; i++) {
      // var imgName = require("../assets/images/picture1.png");
      this.items.push("../assets/images/picture1.png");
    }
  };

}
