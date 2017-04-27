import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';
  contacts: any[];

  constructor(
    private appService: AppService
  ) { }

  getContacts() {
    this
      .appService
      .getContacts()
      .subscribe(
        (response) => {
          this.contacts = response.json()
        },
        (error) => {
          console.warn(error)
        }
      );
  }

  createContact() {
    const contact = {
      firstName: "John",
      lastName: "Smith",
      birthday: 152755200000,
      active: true,
      rank: 1,
      company: "0e8cedd0-ad98-11e6-bf2e-47644ada7c0f"
    };

    this
      .appService
      .createContact(contact)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.warn(error)
        }
      );
  }
}
