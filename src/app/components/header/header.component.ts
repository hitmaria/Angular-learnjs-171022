import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IApplicationConfig } from 'src/app/shared/application-config/application-config.interface';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
	@Input('applicationConfig') config!: IApplicationConfig;

	@Output() menuClick = new EventEmitter<string>();
	//	readonly imgSrc = '';
}
