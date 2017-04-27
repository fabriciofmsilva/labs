import { Component, Renderer, ViewChild } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';

@Component({
  template: `
    Preview: <img #preview/>
  `
})
export class SomeComponent {
  @ViewChild('preview') preview;

  constructor(
    private http: Http,
    private renderer: Renderer
  ) { }

  ngAfterViewInit() {
    this
      .http
      .get('https://angular2.apispark.net/v1/files/angularjs.png', { responseType: ResponseContentType.Blob })
      .map(res => res.blob())
      .subscribe(blobContent => {
        let urlCreator = window.URL;
        let url = urlCreator.createObjectURL(blobContent);
        this.renderer.setElementProperty(this.preview.nativeElement, 'src', url);
     });
  }
}
