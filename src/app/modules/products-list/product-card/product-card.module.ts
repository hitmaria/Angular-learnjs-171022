import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
	declarations: [ProductCardComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatBadgeModule],
	exports: [ProductCardComponent],
})
export class ProductCardModule {}
