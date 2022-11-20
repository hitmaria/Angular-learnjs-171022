import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
	selector: '[appNgIf]',
})
export class NgIfDirective {
	@Input() set appNgIf(visibilityFlag: any) {
		const isContainerHasValue = this.viewContainer.length;
		if (visibilityFlag && !isContainerHasValue) {
			this.viewContainer.createEmbeddedView(this.template, {
				$implicit: visibilityFlag,
				appNgIf: visibilityFlag,
			});
			return;
		}

		if (!visibilityFlag && isContainerHasValue) {
			this.viewContainer.clear();
		}
	}
	constructor(
		private readonly viewContainer: ViewContainerRef,
		private readonly template: TemplateRef<{
			$implicit: any;
			appNgIf: any;
		}>,
	) {}
}
