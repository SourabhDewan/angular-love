
import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  posts: any;
  constructor(private services: PostService) { 
  }

  ngOnInit(): void {
    this.services.getPost().subscribe(response => {
      this.posts = response;
      // console.log(response);
    })
  }
  createPost(input: HTMLInputElement){
    let post = { title : input.value};
    input.value = '';

    this.services.createPost(post).subscribe(response => {
      post["id"] = response["id"];
      this.posts.splice(0, 0, post);
      // console.log(response)
    })
  }

  updatePost(post){
    this.services.updatePost(post)
    .subscribe(response =>{
      console.log(response);
    })
  }

  deletePost(post){
    this.services.deletePost(post.id).subscribe(response =>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      
    })
  }
}
