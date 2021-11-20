import { Contact } from './../../models/contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.css'],
})
export class ContactAppComponent implements OnInit {
  public SelectContact: Contact = {} as Contact;

  constructor() {}

  ngOnInit(): void {}
}
