import {useRef} from 'react'

const useConstructor = (constructor) => {
    const init = useRef(false)
    if (!init.current) {
        init.current = true
        constructor()
    }
}

export {useConstructor}