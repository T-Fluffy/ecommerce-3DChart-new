import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CenterDataComponent } from "./upload-container/center-data/center-data.component";
import { LeftDataComponent } from "./upload-container/left-data/left-data.component";
import { RightDataComponent } from "./upload-container/right-data/right-data.component";
import { UploadContainerComponent } from "./upload-container/upload-container.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "upload_project",
        component: UploadContainerComponent,
        children: [
          { path: "leftData", component: LeftDataComponent },
          { path: "centerData", component: CenterDataComponent },
          { path: "rightData", component: RightDataComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadRoutingModule {}
