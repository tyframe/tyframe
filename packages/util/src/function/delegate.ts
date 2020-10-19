import { closest } from './closest';

interface Delegate {
    destroy: () => void;
}

function listener(
    element: Element | Document,
    selector: string,
    type: string,
    callback: (event: Event) => void,
): (event: Event) => void {
    return (event: Event): void => {
        const target = event.target;
        if (!(target instanceof Element)) {
            return;
        }

        const closestElement = closest(target, selector);
        if (closestElement !== null) {
            callback.call(element, event);
        }
    };
}

function _delegate(
    element: Element | Document,
    selector: string,
    type: string,
    callback: (event: Event) => void,
    options?: boolean | AddEventListenerOptions,
): Delegate {
    const listenerFn = listener(element, selector, type, callback);
    element.addEventListener(type, listenerFn, options);

    return {
        destroy: () => element.removeEventListener(type, listenerFn, options),
    };
}

export function delegate(
    elements: Document | Element | Element[] | NodeListOf<Element> | string,
    selector: string,
    type: string,
    callback: (event: Event) => void,
    options?: boolean | AddEventListenerOptions,
): Delegate | Delegate[] {
    if (elements instanceof Element) {
        return _delegate(elements, selector, type, callback, options);
    }

    if (elements instanceof Document) {
        return _delegate(document, selector, type, callback, options);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
    return [...elements].map(
        (element: Element): Delegate => {
            return _delegate(element, selector, type, callback, options);
        },
    );
}
