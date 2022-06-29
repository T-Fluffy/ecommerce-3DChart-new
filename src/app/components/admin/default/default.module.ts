import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { DashboardComponent } from "../modules/dashboard/dashboard.component";
import { ProductsComponent } from "../modules/products/products.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { BodyComponent } from "./body/body.component";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ProductsComponent,
    SidenavComponent,
    BodyComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class DefaultModule {}
