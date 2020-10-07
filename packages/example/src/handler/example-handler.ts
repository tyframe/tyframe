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
        console.log('ExampleHandler is executed');

        const element = event.target;
        if (element instanceof Element) {
            if (element.classList.contains('example')) {
                const button = document.createElement('button');
                button.classList.add('test');
                button.textContent = 'TEST';

                document.body.append(button);
            }

            if (element.classList.contains('test')) {
                console.log('I am a test button!');
            }
        }
    }
}
