function getPreviousSiblings(element: Node, nodeName: string, selector?: string): Node[] {
    const sibling = element.previousSibling;
    if (sibling === null) {
        return [];
    }

    if (
        sibling.nodeName !== nodeName ||
        (selector !== undefined && sibling instanceof Element && !sibling.matches(selector))
    ) {
        return [...getPreviousSiblings(sibling, nodeName, selector)];
    }

    return [sibling, ...getPreviousSiblings(sibling, nodeName, selector)];
}

function getNextSiblings(element: Node, nodeName: string, selector?: string): Node[] {
    const sibling = element.nextSibling;
    if (sibling === null) {
        return [];
    }

    if (
        sibling.nodeName !== nodeName ||
        (selector !== undefined && sibling instanceof Element && !sibling.matches(selector))
    ) {
        return [...getNextSiblings(sibling, nodeName, selector)];
    }

    return [sibling, ...getNextSiblings(sibling, nodeName, selector)];
}

export function siblings(element: Node, selector?: string): Node[] {
    return [
        ...getPreviousSiblings(element, element.nodeName, selector),
        ...getNextSiblings(element, element.nodeName, selector),
    ];
}
