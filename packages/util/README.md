# @tyframe/util

## Functions

### closest

Returns first parent element of given element, which matches the given selector.

```js
const element = document.querySelector('.test');
const closestElement = closest(element, '.parent');
```

### delegate

Add an event delegation to document.

> The first argument can also be an element, an element array, a node list of elements or a css selector.

```js
delegate(
    document,
    '.test',
    'click',
    (event: Event): void => {
        console.log('click');
    },
    false,
);
```

### siblings

Find all siblings of given element, optionally filtered by a selector.

```js
const element = document.querySelector('button.test');
const siblings = siblings(element, '.test');
```
