import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['content', 'cssClass', 'expanded', 'header', 'iconCss'];
let outputs: string[] = [];
/**
 * 'e-accordionitem' directive represent a item of the Angular Accordion.
 * It must be contained in a Accordion component(`ejs-accordion`). 
 * ```html
 * <ejs-accordion> 
 *   <e-accordionitems>
 *    <e-accordionitem header='Header1'></e-accordionitem>
 *    <e-accordionitem header='Header2' content='Content2'></e-accordionitem>
 *   </e-accordionitems>
 * </ejs-accordion>
 * ```
 */
@Directive({
    selector: 'e-accordionitems>e-accordionitem',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class AccordionItemDirective extends ComplexBase<AccordionItemDirective> {


    /** 
     * Defines single/multiple classes (separated by a space) are to be used for Accordion item customization.
     * @default null
     */
    public cssClass: any;
    /** 
     * Sets the expand (true) or collapse (false) state of the Accordion item. By default, all the items are in a collapsed state.
     * @default false
     */
    public expanded: any;
    /** 
     * Defines an icon with the given custom CSS class that is to be rendered before the header text. 
     * Add the css classes to the `iconCss` property and write the css styles to the defined class to set images/icons. 
     * Adding icon is applicable only to the header. 
     * 
     * @default null
     */
    public iconCss: any;
    /** 
     * Sets the header text to be displayed for the Accordion item. 
     * You can set the title of the Accordion item using `header` property. 
     * It also supports to include the title as `HTML element`, `string`, or `query selector`. 
     * 
     * @default null
     */
    @ContentChild('header')
    @Template()
    public header: any;
    /** 
     * Sets the text content to be displayed for the Accordion item. 
     * You can set the content of the Accordion item using `content` property. 
     * It also supports to include the title as `HTML element`, `string`, or `query selector`. 
     * 
     * @default null
     */
    @ContentChild('content')
    @Template()
    public content: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * AccordionItem Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-accordion>e-accordionitems',
    queries: {
        children: new ContentChildren(AccordionItemDirective)
    },
})
export class AccordionItemsDirective extends ArrayBase<AccordionItemsDirective> {
    constructor() {
        super('items');
    }
}