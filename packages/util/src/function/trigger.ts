export function trigger(element: Element, eventType: string): void {
    const event = document.createEvent('HTMLEvents');
    event.initEvent(eventType, true, false);
    element.dispatchEvent(event);
}
