import {useRef} from 'react'
import {isObject, isFunction, eq} from '../services/utils'
import { useForceUpdate } from './useForceUpdate'
import { useConstructor } from './useConstructor'

const useThis = (initialThis) => {
    const forceUpdate = useForceUpdate()
    const ref = useRef({})

    useConstructor(() => {
        const setState = (value) => {
            const newState = isFunction(value) ? value(ref.current.state) : value
            if (!eq(newState, ref.current.state)) {
                ref.current.state = newState
                forceUpdate()
            }
        }

        ref.current.state = undefined
        if (isObject(initialThis)) {
            ref.current = {...ref.current, ...initialThis}
        }
        ref.current.forceUpdate = forceUpdate
        ref.current.setState = setState
    })

    return ref.current
}

export {useThis}