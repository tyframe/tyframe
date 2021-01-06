import { Service } from '@tyframe/core';

export class ExampleService extends Service {
    constructor() {
        super();
        console.log('Example service initialized');
    }

    test(): void {
        console.log(this.services);
    }
}
