export class Post {
  constructor(
    public title: string,
    public description: string,
    public imgPath: string,
    public author: string,
    public datetimeCreate: Date,
    public numberOfLikes: number
  ) {}
}
