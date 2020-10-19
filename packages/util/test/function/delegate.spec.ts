import { delegate } from '../../src/function/delegate';

describe('delegate', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div class="parent"></div>
            <div class="parent"></div>
        `;
    });

    it('with registed event to div element and a dynamically added element should execute the callback without registering the event again', async () => {
        const parent = document.querySelector('.parent');
        if (parent === null) {
            throw Error('Can\'t find element with selector ".parent"');
        }
        const link = document.createElement('a');
        const callback = jest.fn();
        
        const actual = delegate(parent, 'a', 'click', callback);
        parent.append(link);

        const event = document.createEvent('HTMLEvents');
        event.initEvent('click', true, false);
        link.dispatchEvent(event);

        expect(callback).toHaveBeenCalledTimes(1);
    });

    it('with registed event to document and a dynamically added element should execute the callback without registering the event again', async () => {
        const parent = document.querySelector('.parent');
        if (parent === null) {
            throw Error('Can\'t find element with selector ".parent"');
        }
        const link = document.createElement('a');
        const callback = jest.fn();

        const actual = delegate(document, 'a', 'click', callback);
        parent.append(link);
        const event = document.createEvent('HTMLEvents');
        event.initEvent('click', true, false);
        link.dispatchEvent(event);

        expect(callback).toHaveBeenCalledTimes(1);
    });

    it('with registed event to selector ".parent" and a dynamically added element should execute the callback without registering the event again', async () => {
        const parent = document.querySelector('.parent');
        if (parent === null) {
            throw Error('Can\'t find element with selector ".parent"');
        }
        const link = document.createElement('a');
        const callback = jest.fn();

        const actual = delegate('.parent', 'a', 'click', callback);
        parent.append(link);
        const event = document.createEvent('HTMLEvents');
        event.initEvent('click', true, false);
        link.dispatchEvent(event);

        expect(callback).toHaveBeenCalledTimes(1);
    });

    it('with node list and a dynamically added element to each should execute callback twice without registered the event again', async () => {
        const parentElements = document.querySelectorAll('.parent');
        const link = document.createElement('a');
        const callback = jest.fn();

        const actual = delegate(parentElements, 'a', 'click', callback);
        const event = document.createEvent('HTMLEvents');
        event.initEvent('click', true, false);
        parentElements.forEach(element => {
            const link = document.createElement('a');
            element.append(link);
            link.dispatchEvent(event);
        })

        expect(callback).toHaveBeenCalledTimes(2);
    });

    it('with registed event to document and a dynamically added element which not matched selector should not execute callback', async () => {
        const parent = document.querySelector('.parent');
        if (parent === null) {
            throw Error('Can\'t find element with selector ".parent"');
        }
        const callback = jest.fn();

        const actual = delegate(document, 'button', 'click', callback);
        const event = document.createEvent('HTMLEvents');
        event.initEvent('click', true, false);
        parent.dispatchEvent(event);

        expect(callback).toHaveBeenCalledTimes(0);
    });

    it('with call of function "destroy" of return object should remove event listener', async () => {
        const parent = document.querySelector('.parent');
        if (parent === null) {
            throw Error('Can\'t find element with selector ".parent"');
        }
        const link = document.createElement('a');
        const callback = jest.fn();

        const actual = delegate(document, 'a', 'click', callback);
        parent.append(link);
        const event = document.createEvent('HTMLEvents');
        event.initEvent('click', true, false);
        link.dispatchEvent(event);
        if ('destroy' in actual) {
            actual.destroy();
        }
        link.dispatchEvent(event);

        expect(callback).toHaveBeenCalledTimes(1);
    });

    it('with a registered delegate event and a triggered event on a object which is not type of Element should interrupt callback', async () => {
        const parent = document.querySelector('.parent');
        if (parent === null) {
            throw Error('Can\'t find element with selector ".parent"');
        }
        const link = document.createElement('a');
        const callback = jest.fn();

        const actual = delegate(document, 'a', 'click', callback);

        const event = document.createEvent('HTMLEvents');
        event.initEvent('click', true, false);
        document.dispatchEvent(event);

        expect(callback).toHaveBeenCalledTimes(0);
    });
});
