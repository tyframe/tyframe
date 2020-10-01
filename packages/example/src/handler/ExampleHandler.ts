import { ExampleService } from './../service/ExampleService';
import { Event } from './../../../core/src/decorator/event';
import { AbstractHandler } from './../../../core/src/handler/abstract-handler';

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
export class ExampleHandler extends AbstractHandler {
    handle(event: Event): void {
        console.log(event.target);

        const service = this.getServiceByType(ExampleService) as ExampleService;
        service.test();
    }
}
