import { EventEmitter, Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
  listOfPost: Post[] = [
    // new Post(
    //   'Nature',
    //   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ratione. Laudantium quisquam recusandae beatae delectus mollitia eveniet iure incidunt hic repellat doloribus adipisci, itaque nesciunt? Quo doloribus deleniti atque sit!',
    //   'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
    //   'test@test.com',
    //   new Date(),
    //   3
    // ),
    // new Post(
    //   'Hwllo',
    //   'hello dgchvLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ratione. Laudantium quisquam recusandae beatae delectus mollitia eveniet iure incidunt hic repellat doloribus adipisci, itaque nesciunt? Quo doloribus deleniti atque sit!',
    //   'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
    //   'test@test.com',
    //   new Date(),
    //   4
    // ),
    // new Post(
    //   'Hampi',
    //   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ratione. Laudantium quisquam recusandae beatae delectus mollitia eveniet iure incidunt hic repellat doloribus adipisci, itaque nesciunt? Quo doloribus deleniti atque sit!',
    //   'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
    //   'test@test.com',
    //   new Date(),
    //   5
    // ),
  ];

  getPosts() {
    return this.listOfPost;
  }
  deletePost(index: number) {
    this.listOfPost.splice(index, 1);
  }

  addPost(post: Post) {
    this.listOfPost.push(post);
  }
  updatePost(index: number, post: Post) {
    this.listOfPost[index] = post;
  }
  getPost(index: number) {
    return this.listOfPost[index];
  }
  likePost(index: number) {
    return (this.listOfPost[index].numberOfLikes += 1);
  }
  setPost(listPost: Post[]) {
    this.listOfPost = listPost;
    this.listChangedEvent.emit(this.listOfPost);
  }
}
