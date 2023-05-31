import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-plamo-list',
  templateUrl: './plamo-list.component.html',
  styleUrls: ['./plamo-list.component.css']
})
export class PlamoListComponent {

  plamoList: any = []

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetPlamos().subscribe((res: any) => {
      console.log(res)
      this.plamoList = res;
    })
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go delete this plamo?')) {
      this.crudService.deletePlamo(id).subscribe((res: any) => {
        this.plamoList.splice(i, 1);
      })
    }
  }
}
