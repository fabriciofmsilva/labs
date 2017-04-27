import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  template: `
    <div>
      <input #fileInput type="file"/>
      <div (click)="submitFile()">Submit</div>
    </div>
  `
})
export class SendComponent {

  @ViewChild('fileInput') fileInput;

  constructor(
    private http: Http
  ) { }

  submitFile() {
    let fi = this.fileInput.nativeElement;
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

  submitFiles() {
    let fi1 = this.fileInput.nativeElement;
    let fi2 = this.fileInput.nativeElement;
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
