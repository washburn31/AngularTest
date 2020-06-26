import { Component, OnInit } from '@angular/core';
import { FireBaseCommentService } from 'src/shared/firebase-comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  public success = false;
  public comments;

  constructor(public fireBaseCommentService: FireBaseCommentService) {}

  ngOnInit() {
    this.fireBaseCommentService
      .getComments()
      .subscribe(
        (res) => (this.comments = res.filter((c) => c.commentTitle !== ''))
      );
  }

  addComment(comment: string) {
    this.fireBaseCommentService
      .addComment({
        commentTile: comment,
        createdOn: new Date(),
      })
      .then((res) => (this.success = true));
  }
}
