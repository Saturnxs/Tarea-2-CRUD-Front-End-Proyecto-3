import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ICategory, IProduct } from '../../../interfaces';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-products-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './products-form.component.html',
  styleUrl: './products-form.component.scss'
})
export class ProductsFormComponent {
  @Input() title: string = '';
  @Input() categoriesList: ICategory[] = [];
  @Input() toUpdateProduct: IProduct = {};
  @Output() callParentEvent: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  public categoryService = inject(CategoryService);

  ngOnInit(): void { 
    this.categoryService.getAll();
  }

  addEdit()  {
    this.callParentEvent.emit(this.toUpdateProduct);
  }

}
