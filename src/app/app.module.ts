import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgxSpinnerModule } from "ngx-spinner";
import { NgxImgZoomModule } from "ngx-img-zoom";

import { MainComponent } from "./components/main/main.component";

import { AppRoutingModule } from "./app-routing.module";
import { ShopModule } from "./components/shop/shop.module";
import { SharedModule } from "./components/shared/shared.module";
import { UploadModule } from "./components/upload/upload.module";
import { AdminModule } from "./components/admin/admin.module";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    NgxSpinnerModule,
    BrowserModule,
    SharedModule,
    ShopModule,
    UploadModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxImgZoomModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
