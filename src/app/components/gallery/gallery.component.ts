import { Component, OnInit } from '@angular/core';
import { PhotosService} from '../../services/photos.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  photos: string[];

  constructor(private gallery: PhotosService) { }

  ngOnInit() {
    this.gallery.getPhotos().subscribe((param) => (this.photos = param));
  }

}
