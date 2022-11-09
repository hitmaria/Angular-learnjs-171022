import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';
import { productMock } from '../../../shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	@Input() product: IProduct | undefined;
	@Output() buyProduct = new EventEmitter<string | undefined>();

	onProductBuy(event: Event) {
		event.stopPropagation();

		this.buyProduct.emit(this.product?._id);
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}

	get productView(): string | undefined {
		return this.product?.images[0].url;
	}
}
