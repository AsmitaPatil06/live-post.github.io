import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class BackEndService {
  constructor(private PostService: PostService, private http: HttpClient) {}

  //fun1 Save
  saveData() {
    // step1   get list from post from post.service
    // Database path --- https://live-post-18bc0-default-rtdb.firebaseio.com/

    const listOfPosts: Post[] = this.PostService.getPosts();

    // step2  send list of post to bakcend
    this.http
      .put(
        'https://live-post-18bc0-default-rtdb.firebaseio.com/posts.json',
        listOfPosts
      )
      .subscribe((res) => {
        console.log('Backend Data=>', res);
      });
  }

  //fun Fetch
  fetchData() {
    //step 1 get data from backend database

    this.http
      .get('https://live-post-18bc0-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        tap((lisOfPost: Post[]) => {
          console.log('Fetch pipe data=>', lisOfPost);

          //step2 sent to post.service
          this.PostService.setPost(lisOfPost);
        })
      )
      .subscribe();
  }
}
