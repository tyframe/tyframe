export interface EventConfig {
    selector: string | Document | Window;
    types: string[];
    subSelector?: string;
    options?: AddEventListenerOptions;
}
