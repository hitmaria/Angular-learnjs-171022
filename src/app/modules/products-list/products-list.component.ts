import { Component, OnInit } from '@angular/core';
import { productMock } from 'src/app/shared/products/product.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent implements OnInit {
	readonly product = productMock;

	addProductInBag(productID: string) {
		console.log(`К спискру покупок добавлен товар ${productID}`);
	}

	ngOnInit(): void {}
}
