import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
export default function useStoreData({
    owner,
    name,
    products
}={}) {

    const STORE_INITIAL_STATE = {
        owner: owner || '',
        name: name || '',
        products: products || []
    }

    const { currentUser } = useAuth()

    const [storeData, setStoreData] = useState(STORE_INITIAL_STATE)

    useEffect(() => {
        currentUser && setStoreData({
            ...storeData,
            owner: currentUser.uid
        })
    }, [currentUser])

    const handleOnChange = (e) => setStoreData({
        ...storeData,
        [e.target.name]: e.target.value
    })

    return {
        storeData,
        handleOnChange
    }
}
