import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';

import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogColumnComponent } from './blog-column/blog-column.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BlogRoutingModule

  ],
  declarations: [
    BlogDetailsComponent,
    BlogColumnComponent,
    BlogListComponent
  ]
})
export class BlogModule { }
