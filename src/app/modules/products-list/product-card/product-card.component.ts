import { Component, OnInit } from '@angular/core';
import { productMock } from '../../../shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	readonly product = productMock;

	initialFavotiteData = {
		icon: 'favorite_outline',
		value: false,
	};

	productCount = 0;
	shopBagBadgeHidden = true;

	onFavoriteBtnClick(event: Event) {
		event.stopPropagation();

		if (!this.initialFavotiteData.value) {
			this.initialFavotiteData.value = true;
			this.initialFavotiteData.icon = 'favorite';
			return;
		}

		this.initialFavotiteData.value = false;
		this.initialFavotiteData.icon = 'favorite_outline';
	}

	onShopigBagClick(event: Event) {
		this.productCount += 1;
		this.changeShopBagBageVisibility();
		console.log('Buy');
		event.stopPropagation();
	}

	changeShopBagBageVisibility() {
		this.shopBagBadgeHidden = this.productCount === 0;
	}
}
