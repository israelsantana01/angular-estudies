import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private baseUrl = 'https://jsonp';

  constructor() { }
}
