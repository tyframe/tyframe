import { Service } from "../../src/model/service";

class DummyService extends Service {};

describe('Service', () => {
    it('should be instantiable', async () => {
        const instance = new DummyService();

        expect(instance).toBeTruthy();
    });
});
