---
sidebar_position: 1
description: 'If, Else, and ElseIf is a react helper components with the help of which conditional rendering in react become easier and cleaner.'
title: 'If-Else'
keywords: ['react', 'if-else', 'react-if', 'conditional-rendering', 'react-comfort', 'utils']
---

# If-Else

`If`, `Else`, and `ElseIf` is a react helper components with the help of which **conditional rendering** in react become **easier** and **cleaner**.

## Import

```js
import {If, Else, ElseIf} from 'react-comfort'
```

## Example

Simple example using `If` and `Else` combination.

```jsx
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

More complex example using `If`, `Else`, and `ElseIf` combination.

```jsx
import {If, Else, ElseIf} from 'react-comfort'

const App = (props) => {
    return (
        <If condition={props.condition_1}>
            <p>Show, if cond_1 is true</p>

            <Else>
                <p>Show, if condition_1 is false</p>
            </Else>

            <ElseIf condition={props.condition_2}>
                <p>Show, if condition_1 is false and condition_2 is true</p>
            </ElseIf>

            <ElseIf condition={props.condition_3}>
                <p>Show, if condition_1 is false and condition_3 is true</p>
            </ElseIf>
        </If>
    )
}
```

Example for **nested** `If`-`Else` combination.

```jsx
<If condition={condition_1}>
    <Else condition={condition_2}>
        <If condition={condition_3}>
            <Else condition={condition_4}>
                Hello!
            </Else>
        </If>
    </Else>
</If>
```