import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.sass"],
})
export class MenuComponent implements OnInit {
  admin: boolean = true;
  constructor() {}

  ngOnInit() {}
  openMegaMenu() {
    let pane = document.getElementsByClassName("cdk-overlay-pane");
    [].forEach.call(pane, function (el) {
      if (el.children.length > 0) {
        if (el.children[0].classList.contains("mega-menu")) {
          el.classList.add("mega-menu-pane");
        }
      }
    });
  }
}
