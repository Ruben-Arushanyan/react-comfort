import {useState, useRef} from 'react'

const useForceUpdate = () => {
    const [, update] = useState({})
    const {current: forceUpdate} = useRef(() => update({}))
    return forceUpdate
}

export {useForceUpdate}