---
sidebar_position: 1
title: Introduction
---

# React Comfort

## Description

**React Comfort** is a React library that provides **utilities** for common programming tasks, that make coding in React **easier** and **cleaner**.

## Installation

```
npm install react-comfort
```

## Example

```js
import {If, Else} from 'react-comfort'

const Bar = (props) => {
    return (
        <If condition={props.age >= 18}>
            <h2>🍺🍺🍺</h2>
            <p>Buy alcohol!</p>

            <Else>
                <h2>🚫🚫🚫</h2>
                <p>Sorry, children cannot purchase alcohol!</p>
            </Else>
        </If>
    )
}
```

## References

- Components
    - [If-Else](/docs/components/if-else)

