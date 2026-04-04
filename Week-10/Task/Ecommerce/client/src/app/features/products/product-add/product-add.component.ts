import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../../../models/product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { category } from '../../../models/category.model';
import { NgFor } from '@angular/common';
import { CurrencyConvertorPipe } from '../../../shared/pipes/currency-convertor.pipe';
import { NumberOnlyDirective } from '../../../shared/directives/number-only.directive';
import { Observable } from 'rxjs';
import { ProductModule } from '../product.module';

@Component({
  selector: 'app-product-add',
  imports: [FormsModule, NumberOnlyDirective],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})

export class ProductAddComponent {

  product: Product | undefined;
  categories: category[] = [];
  isEdit = false;
  id: number | null | string = null;
  selectedProduct: Product | undefined;
  isSaved: Boolean = false;

  constructor(private productService: ProductService, private router: Router, private activeRouter: ActivatedRoute) { }


  ngOnInit() {
    this.productService.getAllCategory().subscribe((res) => {
      console.log('all category', res);
      this.categories = res.body;
      console.log('in category', this.categories);
    })

    // this.id = this.activeRouter.snapshot.paramMap.get('id')
    this.id = this.activeRouter.snapshot.paramMap.get('id')
    if (this.id) {
      this.isEdit = true;
      this.getProductById(this.id);
    }
  }


  createProduct(val: NgForm) {
    this.product = val.value;
    console.log(this.product);

    this.isSaved = true;

    console.log('selectedProduct and inputProduct',this.selectedProduct,this.product);
    
    // if(this.selectedProduct == this.product) {
    //   console.log('true');
    // }
    // else {
    //   console.log('false');
    // }

    if (this.isEdit) {
      if (this.product) {
        this.productService.editProduct(this.product).subscribe((res) => {
          console.log('response', res);

          if (res.status === 200) {
            alert('Product Updated Succesfully')
            return
            // return this.router.navigateByUrl('/home')
          }

          return alert('Something Goes Wrong')
        })
      }
    }
    else {
      if (this.product) {
        this.productService.addProduct(this.product).subscribe((res) => {
          console.log('response', res);

          if (res.status === 201) {
            alert('Product Created Succesfully')
            return;
            // return this.router.navigateByUrl('/home')
          }

          return alert('Something Goes Wrong')
        })
      }
    }
  }


  canDeactivate(): boolean | Observable<boolean> {
    if(!this.isSaved) {
      return confirm('You have unsaved changes do you really want to leave')
    }
    return true;
  }


  getProductById(id: any) {
    this.productService.getProductById(id).subscribe((res) => {
      console.log('get product by id', res.body);
      this.selectedProduct = res.body;
    })
  }



  
  
}


