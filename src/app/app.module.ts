import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PostsComponent } from './components/posts/posts.component';
import { FooterComponent } from './components/footer/footer.component';
import { FrontComponent } from './components/front/front.component'
import { FormComponent } from './components/form/form.component';

//Services
import { DataService} from './services/data.service';
import { PhotosService } from './services/photos.service'
import { PostsService } from './services/posts.service';

//Slider
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';


const appRoutes : Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    GalleryComponent,
    PostsComponent,
    FooterComponent,
    FrontComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    SliderModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, PhotosService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
