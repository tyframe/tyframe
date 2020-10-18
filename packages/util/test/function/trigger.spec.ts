import { trigger } from "../../src/function/trigger";

describe('trigger', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <button class="btn">Button</button>
        `;
    });
    
    it('with button and event type "click" should execute click handler once', async () => {
        const button = document.querySelector('.btn');
        if (button === null) {
            throw Error('Can\'t find element with selector ".btn"');
        }
        const clickEventHandler = jest.fn();
        button.addEventListener('click', clickEventHandler);

        trigger(button, 'click');

        expect(clickEventHandler).toHaveBeenCalledTimes(1);
    });
});
