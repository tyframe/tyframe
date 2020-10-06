import { Event, Handler } from '@tyframe/core';

@Event([
    {
        selector: document,
        types: ['click'],
        subSelector: 'button.test',
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
        const div = document.createElement('div');
        div.classList.add('test');

        document.body.append(div);
    }
}
