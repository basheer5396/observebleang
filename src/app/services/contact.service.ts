import { Contact } from './../models/contact';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}
  public getAllContacts(): Observable<Contact[]> {
    let dataURL: string = `https://gist.githubusercontent.com/thenaveensaggam/fe5a67531d964f8c17fc92f0c70ced21/raw/f7c43379ec32421c871a57f832e314dd8e5d92f7/contacts.15.6.2021.json`;
    return this.httpClient.get<Contact[]>(dataURL).pipe();
  }
}
