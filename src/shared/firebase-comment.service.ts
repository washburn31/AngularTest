import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FireBaseCommentService {
  constructor(
    private angularFirestore: AngularFirestore,
    private router: Router
  ) {}

  public getComments(): Observable<any[]> {
    return this.angularFirestore.collection('comments').valueChanges();
  }

  // public getComments(): Observable<any[]> {
  //   return this.angularFirestore.collection('comments').valueChanges();
  // }

  public deleteComment(id) {
    return this.angularFirestore.collection('comments').doc(id).delete();
  }

  public addComment(newComment) {
    return this.angularFirestore
      .collection('comments')
      .add(newComment);
  }

  public updateComment(id, editedComment) {
    return this.angularFirestore
      .collection('comments')
      .doc(id)
      .set(editedComment);
  }
}
