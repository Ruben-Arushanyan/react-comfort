import {isArray} from './utils'
import {ElementNode} from './ElementNode'

class ComponentChildren {
    #value
    constructor(children) {
        this.#value = isArray(children) ? children : [children]
    }

    get value() {
        const length = this.#value.length
        if (length) {
            if (length === 1) {
                return this.#value[0]
            }
            return this.#value
        }
        return null
    }

    callFunctions() {
        this.#value = this.#value.map(node => {
            node = new ElementNode(node)
            node.callFunction()
            return node.value
        })
    }

    removeByNodeTypes(types) {
        this.#value = this.#value.filter(el => {
            const node = new ElementNode(el)
            const nodeType = node.getType()
            return !types.include(nodeType)
        })
    }

    removeExceptNodeTypes(types) {
        this.#value = this.#value.filter(el => {
            const node = new ElementNode(el)
            const nodeType = node.getType()
            return types.include(nodeType)
        })
    }
}

export {ComponentChildren}