import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-category-level1',
  templateUrl: './edit-category-level1.component.html',
  styleUrls: ['./edit-category-level1.component.css']
})
export class EditCategoryLevel1Component {
  avatarUrl = '';
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.avatarUrl = reader.result as string;
    };
  }
}
