import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { RangeNavigator } from '@syncfusion/ej2-charts';
import { Template } from '@syncfusion/ej2-angular-base';
import { RangenavigatorSeriesCollectionDirective } from './series.directive';

export const inputs: string[] = ['allowSnapping','animationDuration','dataSource','disableRangeSelector','enableDeferredUpdate','enableGrouping','enablePersistence','enableRtl','groupBy','height','interval','intervalType','labelFormat','labelIntersectAction','labelPosition','labelStyle','locale','logBase','majorGridLines','majorTickLines','margin','maximum','minimum','navigatorBorder','navigatorStyleSettings','periodSelectorSettings','query','secondaryLabelAlignment','series','skeleton','skeletonType','theme','tickPosition','tooltip','useGroupingSeparator','value','valueType','width','xName','yName'];
export const outputs: string[] = ['beforePrint','changed','labelRender','load','loaded','resized','selectorRender','tooltipRender','dataSourceChange'];
export const twoWays: string[] = ['dataSource'];

/**
 * RangeNavigator Component
 * ```html
 * <ejs-rangenavigator></ejs-rangenavigator>
 * ```
 */
@Component({
    selector: 'ejs-rangenavigator',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childSeries: new ContentChild(RangenavigatorSeriesCollectionDirective)
    }
})
@ComponentMixins([ComponentBase])
export class RangeNavigatorComponent extends RangeNavigator implements IComponentBase {
    public childSeries: any;
    public tags: string[] = ['series'];
    public dataSourceChange: any;
    @ContentChild('tooltipTemplate')
    @Template()
    public tooltip_template: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('ChartsRangeTooltip');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsPeriodSelector');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsAreaSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsStepLineSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsDateTime');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsLogarithmic');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public ngAfterContentChecked(): void {
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

