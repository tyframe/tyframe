import { ExampleService } from './../service/example-service';
import { Event, Handler } from '@tyframe/core';
import { siblings, trigger } from '@tyframe/util';

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
        selector: '.body',
        subSelector: '.example',
        types: ['click', 'touch'],
    },
    {
        selector: '.add',
        types: ['click'],
        options: {
            once: true,
        },
    },
    {
        selector: '.trigger',
        types: ['click'],
    },
])
export class ExampleHandler extends Handler {
    exampleService: ExampleService | null = null;

    protected initialize(): void {
        if (this.exampleService !== null) {
            return;
        }

        this.exampleService = this.getServiceByType(ExampleService) as ExampleService;
        if (this.exampleService === null) {
            throw Error('Initialization of ExampleService fails! Some property could not be set.');
        }
    }

    handle(event: Event): void {
        console.log('ExampleHandler is executed');
        this.initialize();

        this.exampleService?.test();

        const element = event.target;
        if (element instanceof Element) {
            if (element.classList.contains('trigger')) {
                const exampleButton = document.querySelector('.example');
                if (exampleButton !== null) {
                    trigger(exampleButton, 'click');
                }
            }

            if (element.classList.contains('example') || element.classList.contains('add')) {
                const button = document.createElement('button');
                button.classList.add('test');
                button.textContent = 'TEST';

                document.body.append(button);
            }

            if (element.classList.contains('test')) {
                const siblingElements = siblings(element, '.test');
                console.log(siblingElements);
            }
        }
    }
}
