import { OnChanges, SimpleChanges } from '@angular/core';
import { DoCheck } from '@angular/core';
import { AfterContentChecked } from '@angular/core';
import { Attribute } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IApplicationConfig } from '../../shared/application-config/application-config.interface';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
})
// implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
export class HeaderComponent {
	@Input() applicationConfig: IApplicationConfig | undefined;
	@Input() config: IApplicationConfig | undefined;

	@Output() menuClick = new EventEmitter<string | undefined>(true);

	// readonly imgSrc = 'Angular-learnjs-171022';

	// constructor(@Attribute('applicationConfig') private readonly applicationConfigAttr: IApplicationConfig | undefined
	// ) {
	// 	console.log('constructor', this.applicationConfig)
	// }

	// ngOnChanges({applicationConfig,config}: SimpleChanges): void {
	// 	if(applicationConfig)
	// 	{
	// 		// applicationConfig.currentValue === this.applicationConfig - второе значение имеет типизацию в отличии от первого
	// 		console.log('applicationConfig', applicationConfig);
	// 	}

	// 	if(config)
	// 	{
	// 		console.log('config', config);
	// 	}
	// }

	// ngOnInit(){
	// 	console.log('onInit', this.applicationConfig)
	// }

	// ngDoCheck() {

	// }

	// ngAfterContentInit(){

	// }
	// ngAfterContentChecked() {

	// }
	//  ngAfterViewInit() {

	//  }
	//  ngAfterViewChecked() {

	//  }
	//  ngOnDestroy() {

	//  }
}
