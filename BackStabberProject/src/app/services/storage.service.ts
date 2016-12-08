import { Injectable } from '@angular/core';
declare var firebase: any;

@Injectable()
export class StorageService {
  storage = firebase.storage();
  ref = this.storage.ref();

  constructor() { }

  getRef(path: string) {
    return this.storage.ref(path);
  }

  put(path, file, then, error) {
    this.getRef(path).put(file).then(then).error(error);
  }

  refFromURL(url: string) {
    return this.storage.refFromURL(url);
  }

  getFileUrl(path: string, success: any, error: any) {
    // path example: 'images/stars.jpg'
    this.ref.child(path).getDownloadURL().then(success).catch(error);
  }

}
