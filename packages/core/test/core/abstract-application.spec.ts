import { AbstractApplication } from '../../src/core/abstract-application';

class DummyApplication extends AbstractApplication {};

describe('AbstractApplication', () => {
    let instance: AbstractApplication;

    beforeEach(() => {
        instance = new DummyApplication();
    })

    it('with a class thats inherits from AbstractApplication should have the properties "services" and "handlers" initialized as empty array', async () => {
        expect(instance).toEqual({
            services: [],
            handlers: [],
        });
    });
});
