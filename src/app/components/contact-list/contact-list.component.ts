import { Contact } from './../../models/contact';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  public contacts: Contact[] = [] as Contact[];

  @Output() sendContact = new EventEmitter();

  constructor(private contactservice: ContactService) {}

  ngOnInit(): void {
    this.contactservice.getAllContacts().subscribe((data: Contact[]) => {
      this.contacts = data;
    });
  }
  public SelectContact(contact: Contact) {
    this.sendContact.emit(contact);
  }
}
