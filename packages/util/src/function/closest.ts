import * as closestFunction from './closest';

const DOCUMENT_NODE_TYPE = 9;

export function closest(element: Element | null, selector: string): Element | null {
    if (element === null) {
        return null;
    }

    return element.matches(selector) ? element : closestFunction.closest(element.parentElement, selector);
}
