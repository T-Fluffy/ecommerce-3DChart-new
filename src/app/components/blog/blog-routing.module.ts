import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogColumnComponent } from './blog-column/blog-column.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'blog-list', component: BlogListComponent},
      { path: 'blog-column', component: BlogColumnComponent},
      { path: 'blog-details', component: BlogDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BlogRoutingModule { }
