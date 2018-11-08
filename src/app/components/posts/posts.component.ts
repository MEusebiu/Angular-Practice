import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: string[];
  
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe((param)=> this.posts = param);
  }
}
