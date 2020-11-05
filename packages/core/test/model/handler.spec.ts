import { Service } from '../../src/model/service';
import { Handler } from '../../src/model/handler';

describe('Handler', () => {
    it('with a class thats inherits from Handler should have the properties "services" and "config" initialized as empty array', async () => {
        class DummyHandler extends Handler {
            handle() {};
        }

        const actual = new DummyHandler();

        expect(actual).toEqual({
            services: [],
            config: [],
        });
    });

    describe('getServiceByType', () => {
        class FirstDummyService extends Service {}
        class SecondDummyService extends Service {}
        class DummyHandler extends Handler {
            constructor() {
                super();
        
                this.services.push(new FirstDummyService());
            }
        
            handle() {};
        }

        it('with services which contains an instance of FirstDummyService should return it', async () => {
            const instance = new DummyHandler();
            const actual = instance.getServiceByType(FirstDummyService);

            expect(actual).toBeInstanceOf(FirstDummyService);
        });

        it('with services which does not contains an instance of SecondDummyService should return null', async () => {
            const instance = new DummyHandler();
            const actual = instance.getServiceByType(SecondDummyService);

            expect(actual).toBeNull();
        });
    });
});
