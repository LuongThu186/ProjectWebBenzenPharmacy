import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category-level2',
  templateUrl: './add-category-level2.component.html',
  styleUrls: ['./add-category-level2.component.css']
})

export class AddCategoryLevel2Component implements OnInit{
  
  avatarUrl = ''
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.avatarUrl = reader.result as string;
    };
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
    this.options.push({ value: 'datane', label: 'đầy data lên đi ai rảnh liệt kê' });
  }
}

export interface Option {
  value: string;
  label: string;
}

