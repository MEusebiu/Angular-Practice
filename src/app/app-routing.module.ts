import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user/user.component'
import { AboutComponent } from './components/about/about.component'
import { GalleryComponent } from './components/gallery/gallery.component'
import { PostsComponent } from './components/posts/posts.component'
import { FrontComponent } from './components/front/front.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path:'', component: FrontComponent},
  {path:'user', component: UserComponent},
  {path:'about', component: AboutComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'posts', component: PostsComponent },
  {path: 'form', component: FormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
