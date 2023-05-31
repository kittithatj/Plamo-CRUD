import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-plamo',
  templateUrl: './add-plamo.component.html',
  styleUrls: ['./add-plamo.component.css']
})
export class AddPlamoComponent {

  plamoForm!: FormGroup;

  //Dependency Injection
  constructor(public formbuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService) {
    this.plamoForm = this.formbuilder.group({
      name: [''],
      grade: [''],
      brand: [''],
      price: ['']
    })
  }

  ngOnInit(): void { }

  OnSubmit(): any {
    this.crudService.AddPLamo(this.plamoForm.value)
      .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/plamo-list'))
      }, (err) => {
        console.log(err);
      })
  }

}
