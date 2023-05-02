import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicines } from 'src/app/Interfaces/Medicine';
import { AdminMedicineService } from 'src/app/Services/admin-medicine.service';

@Component({
  selector: 'app-add-category-level2',
  templateUrl: './add-category-level2.component.html',
  styleUrls: ['./add-category-level2.component.css']
})

export class AddCategoryLevel2Component implements OnInit{
  medicine = new Medicines();
  errMessage: string = '';
  medicines: any;
  categories: any;
  constructor(public _service: AdminMedicineService, private router: Router, private activateRoute: ActivatedRoute) {
    this._service.getMedicines().subscribe({
      next: (data) => {
        // Lấy danh sách các Medicines
        this.medicines = data;
        this.categories = Array.from(
          new Set(this.medicines.map((x: { Category: any }) => x.Category))
        );
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  public setFashion(f: Medicines) {
    this.medicine = f;
  }
  onFileSelected(event: any, medicine: Medicines) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      medicine.Image = reader.result!.toString();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  postMedicine() {
    this.medicine.Create_date= `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`;
    this._service.postMedicine(this.medicine).subscribe({
      next: (data) => {
        this.medicine = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
    this.goBack();
  }

  goBack() {
    this.router.navigate(['admin-caterogy-management']);
  }

  public selectedOption: Option | undefined;
  options: Option[] = [
    {value:'duocpham', label: 'Dược phẩm'},
    {value:'tpcn', label: 'Thực phẩm chức năng'},
    {value:'sacdep', label: 'Chăm sóc sắc đẹp'}
  ];
  ngOnInit() {
    // Call API to get data and push it to the options array
    // This will automatically add a new option to the select element
  }
}

export interface Option {
  value: string;
  label: string;
}

