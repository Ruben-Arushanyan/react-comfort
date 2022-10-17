import React from 'react'
import {ComponentChildren} from '../../services/ComponentChildren'

const If = (props) => {
    const {children, condition} = props
    const _children = new ComponentChildren(children)
    if (condition) {
        _children.removeByNodeTypes([Else, ElseIf])
    } else {
        _children.removeExceptNodeTypes([Else, ElseIf])
    }
    _children.callFunctions()
    return _children.value
}

const Else = (props) => {
    const {children} = props
    const _children = new ComponentChildren(children)
    _children.callFunctions()
    return _children.value
}

const ElseIf = (props) => <If {...props} />

export {If, Else, ElseIf}