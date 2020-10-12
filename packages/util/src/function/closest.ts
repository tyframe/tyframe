const DOCUMENT_NODE_TYPE = 9;

export function closest(element: Element | null, selector: string): Element | null {
    if (element === null || element.nodeType === DOCUMENT_NODE_TYPE) {
        return null;
    }

    return element.matches(selector) ? element : closest(element.parentElement, selector);
}
