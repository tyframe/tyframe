import { siblings } from "../../src/function/siblings";

describe('siblings', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <ul>
                <li class="odd">1</li>
                <li class="even">2</li>
                <li class="odd">3</li>
                <li class="even">4</li>
                <li class="odd">5</li>
                <li class="even">6</li>
                <li class="odd">7</li>
                <li class="even">8</li>
                <li class="odd">9</li>
                <li class="even">10</li>
            </ul>
        `;
    });

    describe('getPreviousSiblings', () => {
        it('with last list element should return nine list elements', async () => {
            const listElements = document.querySelectorAll('li:last-child');
            const lastListElement = listElements[listElements.length - 1];

            const actual = siblings(lastListElement);

            expect(actual.length).toBe(9);
        });

        it('with last list elment and selector ".odd" should return five elements', async () => {
            const listElements = document.querySelectorAll('li:last-child');
            const lastListElement = listElements[listElements.length - 1];

            const actual = siblings(lastListElement, '.odd');

            expect(actual.length).toBe(5);
        });
    });

    describe('getNextSiblings', () => {
        it('with first list element should return nine list elements', async () => {
            const listElements = document.querySelectorAll('li:first-child');
            const lastListElement = listElements[listElements.length - 1];

            const actual = siblings(lastListElement);

            expect(actual.length).toBe(9);
        });

        it('with first list elment and selector ".even" should return five elements', async () => {
            const listElements = document.querySelectorAll('li:first-child');
            const lastListElement = listElements[listElements.length - 1];

            const actual = siblings(lastListElement, '.even');

            expect(actual.length).toBe(5);
        });
    });
});
