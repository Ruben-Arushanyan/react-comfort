import React, {Children} from 'react'

const If = (props) => {
    let {children, condition} = props
    condition = !!condition
    children = Children.toArray(children)
    if (condition) {
        children = children.filter(node => (node.type !== Else) && (node.type !== ElseIf))
    } else {
        children = children.filter(node => (node.type === Else) || (node.type === ElseIf))
    }
    return children
}

const Else = (props) => {
    let {children} = props
    return children
}

const ElseIf = (props) => <If {...props} />

export {If, Else, ElseIf}