import { Comment } from './comment.model';

export class Song {
  public songId!: number;
  public name!: string;
  public date!: Date;
  public description!: string;
  public imgSource!: string;
  public audioSource!: string;
  public comments!: Comment[];
  constructor() {}
}
