import { Component, OnInit } from '@angular/core';
import { productMock } from '../../../shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	readonly productTitle = productMock.name;
	readonly productView = productMock.images[0];
	readonly productImageHeightPx = '300';

	initialFavotiteData = {
		icon: 'favorite_outline',
		value: false,
	};

	productCount = 0;
	shopBagBadgeVisibility = 'true';

	onFavoriteBtnClick(event: Event) {
		if (!this.initialFavotiteData.value) {
			this.initialFavotiteData.value = true;
			this.initialFavotiteData.icon = 'favorite';
		} else {
			this.initialFavotiteData.value = false;
			this.initialFavotiteData.icon = 'favorite_outline';
		}
		event.stopPropagation();
	}

	onShopigBagClick(event: Event) {
		this.productCount++;
		this.changeShopBagBageVisibility();
		console.log('Buy');
		event.stopPropagation();
	}

	changeShopBagBageVisibility() {
		if (this.productCount == 0) {
			this.shopBagBadgeVisibility = 'true';
		} else {
			this.shopBagBadgeVisibility = 'false';
		}
	}

	get productCost(): string {
		return `${productMock.price} $`;
	}
}
