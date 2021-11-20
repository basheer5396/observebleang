import { Contact } from './../../models/contact';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
})
export class ContactCardComponent implements OnInit {
  @Input() selectedContact: Contact = {} as Contact;

  constructor() {}

  ngOnInit(): void {}

  public isNotEmpty() {
    return Object.keys(this.selectedContact).length > 0;
  }
}
