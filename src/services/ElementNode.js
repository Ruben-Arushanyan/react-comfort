import {isObject, isFunction} from './utils'

class ElementNode {
    value
    constructor(node) {
        this.value = node
    }
    
    getType() {
        return isObject(this.value) ? this.value.type : null
    }
    
    callFunction() {
        this.value = isFunction(this.value) ? this.value() : this.value
    }
}

export {ElementNode}