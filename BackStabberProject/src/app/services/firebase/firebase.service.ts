import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
declare var firebase: any;

@Injectable()
export class FirebaseService {
  db = firebase.database();
  auth = firebase.auth();
  subject = new Subject<any>();
  auser = {
    email: null,
    uid : null,
    displayName: null,
    photoURL : null,
    providerId: null
  };

  constructor() { console.log('firebase consructor'); this.get(); }

  signinUser(email, pass) {
    return this.auth.signInWithEmailAndPassword(email, pass);
  }

  createUser(email, pass) {
    return this.auth.createUserWithEmailAndPassword(email, pass);
  }

  onAuthStateChanged(): Observable<any> {
    this.auth.onAuthStateChanged(
      x => {
        if (x) {
          this.auser.uid = x.uid;
          this.auser.email = x.email;
          this.auser.displayName = x.displayName;
          this.auser.photoURL = x.photoURL;
          this.auser.providerId = x.providerId;
        } else {
          this.auser.uid = null;
          this.auser.email = null;
          this.auser.displayName = null;
          this.auser.photoURL = null;
          this.auser.providerId = null;
        }
        this.subject.next(this.auser);
      },
      e => {
        this.subject.error(e);
      }
    );
    return this.subject.asObservable();
  }

  getCurrentUser() {
    this.auth.currentUser();
  }

  signOut() {
    return this.auth.signOut();
  }

  get() {
    // this.db.ref('objects').set({toast: 'whole grain'});
    const dbRefObject = this.db.ref().child('objects');
    dbRefObject.on('value', snap => console.log(snap.val())); // value is the event type that will sync the data realtime
    // console.log(ref);

    // list
    const dbRefList = dbRefObject.child('hobbies');
    dbRefList.on('child_added', snap => console.log(snap.val()));
  }

  put(path, data) {
    this.db.ref(path).set(data);
  }
}
