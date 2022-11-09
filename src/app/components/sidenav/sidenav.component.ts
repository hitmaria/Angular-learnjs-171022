import {
	AfterContentInit,
	AfterViewInit,
	Component,
	ContentChild,
	ElementRef,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	QueryList,
	SimpleChange,
	SimpleChanges,
	TemplateRef,
	ViewChild,
	ViewChildren,
	ViewContainerRef,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent implements OnInit, AfterViewInit {
	// @Input() isDrawerOpened = false;

	// @Output() isDrawerOpenedChange = new EventEmitter<boolean>();

	// @Input() set navigationTemplate(template: TemplateRef<unknown> | undefined){
	// 	this.viewport.clear();
	// 	if(template)
	// 	{
	// 		this.viewport.createEmbeddedView(template);
	// 	}
	// };

	@ViewChild(MatDrawer, { static: true })
	private matDrawerInstance!: MatDrawer;

	@ViewChild('viewport', { static: true, read: ViewContainerRef })
	private viewport!: ViewContainerRef;

	@ViewChildren('p')
	private readonly p!: QueryList<HTMLElement>;

	// @ContentChild('input', {static: true})
	// private readonly input!: ElementRef<HTMLInputElement>;
	@ContentChild('navigation', { static: true })
	private readonly navigationCpntentTemplate!: TemplateRef<unknown>;
	ngOnInit() {
		this.viewport.createEmbeddedView(this.navigationCpntentTemplate);
	}
	// ngOnChanges({navigationTemplate}: SimpleChanges) {
	// 	if(navigationTemplate)
	// 	{
	// 		this.insertNamigationTemplate(this.navigationTemplate);
	// 	}
	// }

	// private insertNamigationTemplate(temmplate: TemplateRef<unknown>| undefined)
	// {
	// 	this.viewport.clear();
	// 	if(temmplate)
	// 	{
	// 		this.viewport.createEmbeddedView(temmplate);
	// 	}
	// }

	// ngOnInit() {
	// 	setTimeout(() => {
	// 		if (this.navigationTemplate) {
	// 			this.viewport.createEmbeddedView(this.navigationTemplate);
	// 			this.viewport.createEmbeddedView(this.navigationTemplate);
	// 			this.viewport.createEmbeddedView(this.navigationTemplate);
	// 		}
	// 	}, 4000);
	// }

	// @ViewChild(MatDrawer, {
	//   read: MatDrawer,
	//   static: true,
	// })
	// private matDrawerTest!: MatDrawer;

	// ngOnInit() {
	// this.matDrawerTest.toggle();
	// }

	// ngAfterViewInit() {
	// setTimeout(() => {
	//   this.matDrawerTest.toggle();
	// })
	// }

	ngAfterViewInit() {
		console.log(this.p);
	}

	togleDrawer() {
		this.matDrawerInstance.toggle();
		// console.log(this.matDrawerTest);
	}
}
