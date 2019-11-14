declare interface VueSelect {
    getOptionLabel: (string) => string,
    getOptionKey: (option: Object | string) => string,
    selectable: (option: Object | string) => boolean,
    selectedValue: Array<any>,
    optionComparator: (value: any, option: any) => boolean,
}

export default class Option {
    readonly option: any;
    readonly component: VueSelect;

    constructor(option: any, component: VueSelect) {
        this.option = option;
        this.component = component;
    }

    get label(): string {
        return this.component.getOptionLabel(this.option)
    }

    get selectable() : boolean {
        return this.component.selectable(this.option);
    }

    get selected() : boolean {
        return this.component.selectedValue.some(value => {
            return this.component.optionComparator(value, this.option)
        })
    }
}
