import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Images } from '../models/placeholder.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getPictures(): Observable<Images> {
    return this.http.get<Images>(this.baseUrl);
  }
}
