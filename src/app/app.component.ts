import { Component, ViewEncapsulation } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';

@Component({
	selector: 'app-root', // <app-root></app-root>
	// div[class="root"] -> <div class="root"></div>
	// template: `
	// <h1>
	// 	Hello
	// </h1>
	// `,
	templateUrl: './app.component.html',
	// styles: ['h1 { color: #900; }'],
	styleUrls: ['./app.component.less'],
	// encapsulation: ViewEncapsulation.Emulated,
	// interpolation: ['{{', '}}'],
})
export class AppComponent {
	//readonly title = 'Angular-learnjs-171022';
	readonly applicationConfig = applicationConfigMock;

	isDrawerOpened = false;

	onMenuClick() {
		this.isDrawerOpened = !this.isDrawerOpened;
	}
}
