import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CartComponent } from "./cart/cart.component";
import { ContactComponent } from "./contact/contact.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { CompareComponent } from "./compare/compare.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MyAccountComponent } from "./my-account/my-account.component";
import { FaqComponent } from "./faq/faq.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { BlogModule } from "../blog/blog.module";
import { ErrorPageComponent } from "./error-page/error-page.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    SharedModule,
    BlogModule,
  ],
  declarations: [
    CartComponent,
    ContactComponent,
    WishlistComponent,
    CompareComponent,
    CheckoutComponent,
    MyAccountComponent,
    FaqComponent,
    AboutUsComponent,
    ErrorPageComponent,
  ],
})
export class PagesModule {}
