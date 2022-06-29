import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UploadRoutingModule } from "./upload-routing.module";
import { UploadContainerComponent } from "./upload-container/upload-container.component";
import { LeftDataComponent } from "./upload-container/left-data/left-data.component";
import { CenterDataComponent } from "./upload-container/center-data/center-data.component";
import { RightDataComponent } from "./upload-container/right-data/right-data.component";
import { MatIcon, MatIconModule } from "@angular/material";

@NgModule({
  declarations: [
    UploadContainerComponent,
    LeftDataComponent,
    CenterDataComponent,
    RightDataComponent,
  ],
  imports: [CommonModule, UploadRoutingModule, MatIconModule],
})
export class UploadModule {}
