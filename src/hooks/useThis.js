import {useRef} from 'react'
import isObject from 'comfortable/isObject'
import isFunction from 'comfortable/isFunction'
import { useForceUpdate } from './useForceUpdate'
import { useConstructor, useForceUpdate } from './useConstructor'

const useThis = (initialThis) => {
    const forceUpdate = useForceUpdate()
    const {current: _this} = useRef({})

    useConstructor(() => {
        const setState = (value) => {
            const newState = isFunction(value) ? value(_this.state) : value
            if (![newState].includes(_this.state)) { // TODO change eq()
                _this.state = newState
                forceUpdate()
            }
        }
        _this.forceUpdate = forceUpdate
        _this.setState = setState
        _this.state = undefined

        if (isObject(initialThis)) {
            // TODO in progress
        }
    })

    return _this
}