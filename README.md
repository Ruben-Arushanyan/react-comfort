# [React Comfort](https://react-comfort.js.org)
> You can find the full documentation on the [website](https://react-comfort.js.org)

## Description

**React Comfort** is a React library that provides **utilities** for common programming tasks, that make coding in React **easier** and **cleaner**.


## Installation

```
npm install react-comfort
```

## Example

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

## [Documentation](https://react-comfort.js.org)

- ### [Introduction](https://react-comfort.js.org/docs/introduction)
- ### Components
    - [If-Else](https://react-comfort.js.org/docs/components/if-else)

</br>

## [Contributing](https://github.com/ruben-arushanyan/react-comfort/blob/master/CONTRIBUTING.md)

Read our [contributing guide](https://github.com/ruben-arushanyan/react-comfort/blob/master/CONTRIBUTING.md) to learn about our development process.

## [Code of Conduct](https://github.com/ruben-arushanyan/react-comfort/blob/master/CODE_OF_CONDUCT.md)

This project has adopted the [Contributor Covenant](https://www.contributor-covenant.org) as its Code of Conduct, and we expect project participants to adhere to it. Please read the [full text](https://github.com/ruben-arushanyan/react-comfort/blob/master/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Authors

- [Ruben Arushanyan](https://github.com/ruben-arushanyan)

## License

[MIT License](https://github.com/Ruben-Arushanyan/react-comfort/blob/master/LICENSE)