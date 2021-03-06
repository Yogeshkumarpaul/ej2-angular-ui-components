import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { InitialShapeSelectionsDirective } from './initialshapeselection.directive';
import { MarkersDirective } from './markersettings.directive';
import { BubblesDirective } from './bubblesettings.directive';
import { NavigationLinesDirective } from './navigationlinesettings.directive';

let input: string[] = ['animationDuration', 'bingMapType', 'bubbleSettings', 'dataLabelSettings', 'dataSource', 'geometryType', 'highlightSettings', 'initialShapeSelection', 'key', 'layerType', 'markerClusterSettings', 'markerSettings', 'navigationLineSettings', 'query', 'selectionSettings', 'shapeData', 'shapeDataPath', 'shapePropertyPath', 'shapeSettings', 'staticMapType', 'toggleLegendSettings', 'tooltipSettings', 'type', 'urlTemplate', 'visible'];
let outputs: string[] = [];
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer></e-layer>
 * </e-layers>
 * ```
 */
@Directive({
    selector: 'e-layers>e-layer',
    inputs: input,
    outputs: outputs,    
    queries: {
        childInitialShapeSelection: new ContentChild(InitialShapeSelectionsDirective), 
        childMarkerSettings: new ContentChild(MarkersDirective), 
        childBubbleSettings: new ContentChild(BubblesDirective), 
        childNavigationLineSettings: new ContentChild(NavigationLinesDirective)
    }
})
export class LayerDirective extends ComplexBase<LayerDirective> {
    public childInitialShapeSelection: any;
    public childMarkerSettings: any;
    public childBubbleSettings: any;
    public childNavigationLineSettings: any;
    public tags: string[] = ['initialShapeSelection', 'markerSettings', 'bubbleSettings', 'navigationLineSettings'];
    /** 
     * Specifies the type for the layer.
     * @default Layer
     */
    public type: any;
    /** 
     * Specifies the animation duration for the layer.
     * @default 0
     */
    public animationDuration: any;
    /** 
     * Specifies the type for the bing map.
     * @default Aerial
     */
    public bingMapType: any;
    /** 
     * To configure the bubble settings of the maps.
     */
    public bubbleSettings: any;
    /** 
     * To configure the datalabel settings of the maps.
     */
    public dataLabelSettings: any;
    /** 
     * * Specifies dataSource for the layer. 
     * * The datasource can contain data that can be bound to the tooltip, marker, and bubble.
     * @isdatamanager false
     * @isobservable true
     * @default []
     */
    public dataSource: any;
    /** 
     * Specifies the geometry type
     * @default Geographic
     */
    public geometryType: any;
    /** 
     * To configure the highlight settings of the maps.
     */
    public highlightSettings: any;
    /** 
     * To select the shape at the rendering time.
     */
    public initialShapeSelection: any;
    /** 
     * Specifies the key for the layer.
     * @default ''
     */
    public key: any;
    /** 
     * Specifies the layerType for the layer.
     * @default Geometry
     */
    public layerType: any;
    /** 
     * To configure the cluster settings.
     */
    public markerClusterSettings: any;
    /** 
     * To configure the marker settings.
     */
    public markerSettings: any;
    /** 
     * navigationLineSetting
     */
    public navigationLineSettings: any;
    /** 
     * Specifies the query to select particular data from the shape data. 
     * This property is applicable only when the DataSource is `ej.DataManager`.
     * @default null
     */
    public query: any;
    /** 
     * To configure the selection settings of the maps.
     */
    public selectionSettings: any;
    /** 
     * Specifies the shape data for the layer.
     * @isdatamanager false
     * @default null
     */
    public shapeData: any;
    /** 
     * Specifies the shapeDataPath for the layer.
     * @default 'name'
     */
    public shapeDataPath: any;
    /** 
     * Specifies the shapePropertyPath for the layer.
     * @default 'name'
     */
    public shapePropertyPath: any;
    /** 
     * Specifies the shape properties
     */
    public shapeSettings: any;
    /** 
     * Specifies the type for the static map.
     * @default RoadMap
     */
    public staticMapType: any;
    /** 
     * To configure the legend toggle settings.
     */
    public toggleLegendSettings: any;
    /** 
     * To configure the tooltip settings of the maps layer.
     */
    public tooltipSettings: any;
    /** 
     * Specifies the urlTemplate for the layer.
     * @default 'https://a.tile.openstreetmap.org/level/tileX/tileY.png'
     */
    public urlTemplate: any;
    /** 
     * Toggle the visibility of the layers.
     * @default true
     */
    public visible: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * Layer Array Directive
 * @private
 */
@Directive({
    selector: 'ej-maps>e-layers',
    queries: {
        children: new ContentChildren(LayerDirective)
    },
})
export class LayersDirective extends ArrayBase<LayersDirective> {
    constructor() {
        super('layers');
    }
}