import { Event } from './../../src/decorator/event';
import { Service } from '../../src/model/service';
import { Handler } from '../../src/model/handler';
import { Application } from "../../src/decorator/application";

describe('application', () => {
    // todo: check why mock functions don't work
    // const mockCallback = jest.fn();
    const mockCallback = (event: Event) => {  
        if (event.currentTarget instanceof HTMLElement) {
            (event.currentTarget as HTMLElement).classList.add('success');
        }
        if (event.target instanceof HTMLElement) {
            (event.target as HTMLElement).classList.add('success');
        }
    };

    class DummyService extends Service {};
    @Event([
        {
            selector: '.test',
            types: ['click'],
        },
        {
            selector: document,
            subSelector: '.test-2',
            types: ['click'],
        },
        {
            selector: document,
            types: ['click'],
        }
    ])
    class DummyHandler extends Handler {
        handle = mockCallback;
    };

    @Application({
        services: [DummyService],
        handlers: [DummyHandler],
    })
    class App {
        services: Service[] = [];
        handlers: Handler[] = [];
    }

    let instance: App;

    beforeEach(() => {
        document.body.innerHTML = `
            <button class="test">Test Button</button>
            <button class="test-3">Test Button</button>
        `;
        instance = new App();

        // mockCallback.mockClear();
    });

    it('with registered DummyService should create an instance by initialation', async () => {
        const service = new DummyService();

        expect(instance.services).toEqual([service]);
    });

    it('with registered DummyHandler should create an instance by initialation', async () => {
        expect(instance.handlers.length).toEqual(1);
        instance.handlers.forEach((handler) => expect(handler).toBeInstanceOf(DummyHandler));
    });

    it('with registered DummyHandler and defined click event for selector ".test" should add the class "success" to clicked button', async () => {
        const button: HTMLElement | null = document.querySelector('.test');

        button?.click();
        
        // todo: check why mock functions don't work
        expect(button?.classList.contains('success')).toBe(true);
    });

    it('with registered DummyHandler and defined click event for document and sub selector ".test" should add the class "success" to clicked button', async () => {
        document.body.innerHTML = `<button class="test-2">Test Button</button>`;
        const button: HTMLElement | null = document.querySelector('.test-2');
        
        button?.click();
        
        // todo: check why mock functions don't work
        expect(button?.classList.contains('success')).toBe(true);
    });

    it('with registered DummyHandler and defined click event for document should add the class "success" to clicked button', async () => {
        const button: HTMLElement | null = document.querySelector('.test-3');
        
        button?.click();
        
        // todo: check why mock functions don't work
        expect(button?.classList.contains('success')).toBe(true);
    });
});
