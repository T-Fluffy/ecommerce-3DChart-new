import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultComponent } from "./components/admin/default/default.component";
import { DashboardComponent } from "./components/admin/modules/dashboard/dashboard.component";
import { ProductsComponent } from "./components/admin/modules/products/products.component";
import { LoginComponent } from "./components/login/login.component";
import { MainComponent } from "./components/main/main.component";
import { RegisterComponent } from "./components/register/register.component";

const appRoutes: Routes = [
  {
    path: "admin",
    component: DefaultComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "products",
        component: ProductsComponent,
      },
    ],
  },
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./components/shop/shop.module").then((m) => m.ShopModule),
      },
      {
        path: "pages",
        loadChildren: () =>
          import("./components/pages/pages.module").then((m) => m.PagesModule),
      },
      {
        path: "blog",
        loadChildren: () =>
          import("./components/blog/blog.module").then((m) => m.BlogModule),
      },
      {
        path: "upload",
        loadChildren: () =>
          import("./components/upload/upload.module").then(
            (m) => m.UploadModule
          ),
      },
    ],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "**",
    redirectTo: "home/one",
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
