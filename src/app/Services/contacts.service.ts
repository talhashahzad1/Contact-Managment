import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private http : HttpClient
  ) { }

  getContactList(): Observable<any> {
    return this.http.get<any>('../../../assets/db.json');
  }

}
