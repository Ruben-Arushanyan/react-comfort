import {Children} from 'react'
import {Shell, createShellProvider} from 'react-component-shell'
import {usePrevious} from '../../hooks/usePrevious'

class IfShell extends Shell {
    state = {
        condition: false
    }
}

const IfWrapper = (props) => {
    let {children, condition, shell} = props
    condition = !!condition
    const prevCondition = usePrevious(condition)
    if (condition !== prevCondition) {
        shell.updateState(state => ({...state, condition}))
    }
    children = Children.toArray(children)
    children = children.filter(el => el.type !== Else)
    return  condition ? children : null
}

const ElseWrapper = (props) => {
    const {children} = props
    const condition = useIfState(state => state.condition)
    return condition ? null : children
}

const [If, , useIfState] = createShellProvider({
    shellClass: IfShell,
    customProviderWrapper: IfWrapper
})

const [Else] = createShellProvider({
    customProviderWrapper: ElseWrapper
})

export {If, Else}