import { Service } from "../../src/model/service";

class DummyService extends Service {};

describe('Service', () => {
    it('should be instantiable', async () => {
        const instance = new DummyService();

        expect(instance).toBeTruthy();
    });

    describe('getServiceByType', () => {
        class FirstDummyService extends Service {}
        class SecondDummyService extends Service {
            constructor() {
                super();
                this.services.push(new FirstDummyService());
            }
        };

        it('with services which contains an instance of FirstDummyService should return it', async () => {
            const instance = new SecondDummyService();
            const actual = instance.getServiceByType(FirstDummyService);

            expect(actual).toBeInstanceOf(FirstDummyService);
        });

        it('with services which does not contains an instance of SecondDummyService should return null', async () => {
            const instance = new SecondDummyService();
            const actual = instance.getServiceByType(SecondDummyService);

            expect(actual).toBeNull();
        });
    });
});
