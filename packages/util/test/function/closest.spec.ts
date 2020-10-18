import { closest } from '../../src/function/closest';
import * as closestFunction from '../../src/function/closest';

describe('closest', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div class="parent-3">
                <div class="parent-2">
                    <div class="parent-1">
                        <button class="test">Test Button</button>
                    </div>
                </div>
            </div>
        `;
    });

    it('with element is null should return null', async () => {
        const actual = closest(null, '.parent');

        expect(actual).toBeNull();
    });

    it('with element which matches selector should be returned it selves', async () => {
        const element = document.querySelector('.test');

        const actual = closest(element, '.test');

        expect(actual).toBe(element);
    });

    it('with parent on third level should call the function closest three times', async () => {
        const mock = jest.spyOn(closestFunction, 'closest');
        const element = document.querySelector('.test');

        const actual = closestFunction.closest(element, '.parent-3');

        expect(mock).toHaveBeenCalledTimes(4);

        mock.mockRestore();
    });
});
