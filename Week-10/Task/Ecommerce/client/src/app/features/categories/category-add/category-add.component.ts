import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';
import { category } from '../../../models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  imports: [FormsModule],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css'
})
export class CategoryAddComponent {

  constructor(private categoryService: CategoryService,private router:Router) { }

  category: category | undefined;

  createCategory(val: NgForm) {
    console.log(val.value);
    this.category = val.value;
    if (this.category) {
      this.categoryService.createCategory(this.category).subscribe((res) => {
        console.log(res);
        if(res.status === 201) {
          alert('category added successfully')
          // return this.router.navigateByUrl('/home',{ replaceUrl: true});
          this.router.navigateByUrl('/home', { replaceUrl: true})
          return;
        }
        else {
          return alert('This Category is already exist')
        }
      })
    }
  }


  

}
