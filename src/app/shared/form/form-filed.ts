export class FormField {
    label?: string;
    type?: string;
    required?: boolean = false;
    validator?: string;
    width?:number;
    value?:string = '';
    validation:any;
    key?: any;
    options?: any;
    endPoint?:string;
}