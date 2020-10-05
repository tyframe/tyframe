# @tyframe/core

```bash
npm install @tyframe/core
```

## Application

Create an application class, inherit from `AbstractApplication` and register handlers and services with the `Application` decorator.

```js
import { Application, AbstractApplication } from '@tyframe/core';

@Application({
    handlers: [ExampleHandler],
    services: [ExampleService],
})
export class App extends AbstractApplication {}
```

## Service

Create a service class by inherit from `Service`.

```js
import { Service } from '@tyframe/core';

export class ExampleService implements Service {
    test(): void {
        console.log('run method test');
    }
}
```

## Handler

Create an event handler class by inherit from `Handler`.
Then you can use the event decorator to define event for this handler by using an selector and an array of event types. As selector you can use the document/window object or a css query selector.

> All services which are defined using the `Application` decorator are available in all handlers.

```js
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

        // get service by type
        const exampleService = this.getServiceByType(ExampleServie);
    }
}
```
