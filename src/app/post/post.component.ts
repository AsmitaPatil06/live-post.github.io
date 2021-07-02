import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post?: Post;
  @Input() index?: number;
  constructor(
    private PostService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.post);
    console.log(this.index);
  }
  onDelete() {
    console.log('Delete');
    this.PostService.deletePost(this.index);
  }
  onEdit() {
    console.log('Edit!!!');
    this.router.navigate(['post-edit', this.index]);
  }
  likePost() {
    console.log('Likepost');
    this.PostService.likePost(this.index);
  }
}
