import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  index: number = 0;
  editMode = false;
  constructor(
    private PostService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let t = '';
    let des = '';
    let ip = '';
    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        console.log(params['index']);
        this.index = params['index'];
        console.log(this.PostService.getPost(this.index));

        const editpost = this.PostService.getPost(this.index);

        t = editpost.title;
        des = editpost.description;
        ip = editpost.imgPath;

        this.editMode = true;
      }
    });

    //   this.form = new FormGroup({
    //     title: new FormControl(null, [
    //       Validators.required,
    //       Validators.maxLength(10),
    //     ]),
    //     desc: new FormControl(null, [Validators.required]),
    //     imgPath: new FormControl(null, [Validators.required]),
    //   });
    // }
    this.form = new FormGroup({
      title: new FormControl(t, [
        Validators.required,
        Validators.maxLength(10),
      ]),
      desc: new FormControl(des, [Validators.required]),
      imgPath: new FormControl(ip, [Validators.required]),
    });
  }

  onSubmit() {
    console.log('Submiited!!!!');
    console.log(this.form);

    const title = this.form.value.title;
    const descp = this.form.value.desc;
    const img = this.form.value.imgPath;

    //Ready with object
    const post: Post = new Post(
      title,
      descp,
      img,
      'test@gmai.com',
      new Date(),
      0
    );

    if (this.editMode) {
      this.PostService.updatePost(this.index, post);
    } else {
      this.PostService.addPost(post);
    }
    // this.PostService.addPost(post);

    this.router.navigate(['/post-list']);
    //Navigate to post-list
  }
}
