import { Service } from '@tyframe/core';

export class ExampleService implements Service {
    constructor() {
        console.log('Example service initialized');
    }

    test(): void {
        console.log('run method test');
    }
}