import { Event, Handler } from '@tyframe/core';

@Event([
    {
        selector: document,
        types: ['click'],
    },
    {
        selector: window,
        types: ['scroll'],
    },
    {
        selector: '.example',
        types: ['click', 'touch'],
    },
])
export class ExampleHandler extends Handler {
    handle(event: Event): void {
        console.log(event.target);
    }
}
