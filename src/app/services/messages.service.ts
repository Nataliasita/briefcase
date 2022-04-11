import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private firestore:AngularFirestore) { }

  sendMessage(messageItem:any):Promise<any>{
    return this.firestore.collection('allmessage').add(messageItem)
  }




}
