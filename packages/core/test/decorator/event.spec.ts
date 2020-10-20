import { EventConfig } from './../../src/model/event-config';
import { Event } from "../../src/decorator/event";

describe('event', () => {

    @Event([
        {
            selector: '.example',
            types: ['click'],
        }
    ])
    class DummyHandler {
        config: EventConfig[] = [];
    };

    it('with event decorator should set config array of decorated class', async () => {
        const instance = new DummyHandler();

        expect(instance.config).toEqual([
            {
                selector: '.example',
                types: ['click'],
            }
        ])
    });
});
