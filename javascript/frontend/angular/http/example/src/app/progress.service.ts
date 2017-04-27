// Upload and download progress
import { Injectable } from '@angular/core';
import { BrowserXhr } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProgressService {

  downloadProgress: Subject<any> = new Subject();
  uploadProgress: Subject<any> = new Subject();

}

@Injectable()
export class CustomBrowserXhr extends BrowserXhr {

  constructor(
    private service: ProgressService
  ) {
    super();
  }

  build(): any {
    let xhr = super.build();

    xhr.onprogress = (event) => {
      this.service.downloadProgress.next(event);
    };

    xhr.upload.onprogress = (event) => {
      this.service.uploadProgress.next(event);
    };

    return <any>(xhr);
  }

}
