import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-plamo-info',
  templateUrl: './plamo-info.component.html',
  styleUrls: ['./plamo-info.component.css']
})
export class PlamoInfoComponent {

  getId: any;
  updateForm!: FormGroup;

  constructor(
    public formbuilder: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.getId = this.actRoute.snapshot.paramMap.get('id');

    this.crudService.GetPlamo(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        grade: res['grade'],
        brand: res['brand'],
        price: res['price']
      })
    })

    this.updateForm = this.formbuilder.group({
      name: [''],
      grade: [''],
      brand: [''],
      price: ['']
    })

  }

  onUpdate(): any {
    this.crudService.updatePlamo(this.getId, this.updateForm.value).subscribe(() => {
      console.log("Data Updated Successfully!")
      this.ngZone.run(() => this.router.navigateByUrl('/plamo-list'))
    }, (err) => {
      console.log(err)
    })
  }

}
