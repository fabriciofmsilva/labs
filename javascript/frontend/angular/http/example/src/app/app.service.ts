import { Injectable } from '@angular/core';
import { Headers, Http, ResponseContentType } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(
    private http: Http
  ) { }

  getContacts() {
    return this
      .http
      .get('https://angular2.apispark.net/v1/contacts/');
  }

  // Using text payloads

  createContact(contact: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this
      .http
      .post('https://angular2.apispark.net/v1/contacts/', contact, headers);
  }

  // Handling binary content

  // Sending content as binary

  sendAsBinary() {
    // Blob
    let input = new Blob(['body { color: red; }']);
    this
      .http
      .post('https://angular2.apispark.net/v1/files/somecssfile.css', input)
      .subscribe();

    let input2 = new Blob(['body { color: red; }'], {type: 'text/css'});
    this
      .http
      .post('https://angular2.apispark.net/v1/files/somecssfile.css', input2)
      .subscribe();

    // or
    let headers = new Headers({'Content-Type': 'text/css'});
    let input3 = new Blob(['body { color: red; }']);
    this
      .http
      .post('https://angular2.apispark.net/v1/files/somecssfile.css', input3, headers)
      .subscribe();

    // ArrayBuffer
    let input4 = new ArrayBuffer(512);
    this
      .http
      .post('https://angular2.apispark.net/v1/files/somecssfile.css', input, headers)
      .subscribe();

    // or
    let headers5 = new Headers({'Content-Type': 'text/css'});
    let input5 = new ArrayBuffer(512);
    this
      .http
      .post('https://angular2.apispark.net/v1/files/somecssfile.css', input5, headers5)
      .subscribe();
  }

  // Receiving binary content
  getAsBinary() {
    this
      .http
      .get('https://angular2.apispark.net/v1/files/angularjs.png', { responseType: ResponseContentType.Blob })
     .subscribe();

    this
      .http
      .get('https://angular2.apispark.net/v1/files/angularjs.png', { responseType: ResponseContentType.Blob })
      .map(res => res.blob())
      .subscribe(blobContent => { });

    this
      .http
      .get('https://angular2.apispark.net/v1/files/angularjs.png', { responseType: ResponseContentType.ArrayBuffer })
     .map(res => res.arrayBuffer())
     .subscribe(arrayBufferContent => { });
  }

  // Sending data as forms
  sendAsForms() {
    let input = {
      firstName: 'first name',
    };
    let body = new URLSearchParams();
    body.set('firstName', input.firstName);

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this
      .http
      .post('http://....', body.toString(), headers)
      .subscribe();
  }

  // Uploading files

  // Sending a single file
  sendSingleFile(files) {
    let fi = files;

    if (fi.files && fi.files[0]) {
      let fileToUpload = fi.files[0];
      this
        .http
        .put(`https://angular2.apispark.net/v1/files/${fileToUpload.name}`, fileToUpload)
        .subscribe(res => {
          console.log(res);
        });
    }
  }

  // Using multipart form
  sendMultipartForm(file1, file2) {
    let fi1 = file1;
    let fi2 = file2;

    if (fi1.files &&
        fi1.files[0] &&
        fi2.files &&
        fi2.files[0]) {
      let fileToUpload1 = fi1.files[0];
      let fileToUpload2 = fi2.files[0];

      let input = new FormData();
      input.append('file1', fileToUpload1);
      input.append('file2', fileToUpload2);

      this
        .http
        .post(`https://angular2.apispark.net/v1/files/`, input)
        .subscribe(res => {
          console.log(res);
        });
    }
  }

}
