import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { DefaultModule } from "./default/default.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, DefaultModule, BrowserAnimationsModule],
})
export class AdminModule {}
