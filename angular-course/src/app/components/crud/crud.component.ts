import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Images } from 'src/app/models/placeholder.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  images: Images;
  error: any;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.getter();
  }

  getter() {
    this.crudService.getPictures().subscribe(
      data => {
        this.images = data;
        console.log('The data that received', data);
        console.log('The variable that fill', this.images);
      },
      error => {
        this.error = error;
        console.error('ERROR: ', error);
      }
    );
  }
}
