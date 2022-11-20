import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/products/product.interface';
import { productMock } from 'src/app/shared/products/product.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent implements OnInit {
	product: IProduct | undefined = undefined;

	ngOnInit() {
		setTimeout(() => {
			this.product = productMock;
		}, 3000);
	}
}
