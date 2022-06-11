import { useCallback, useState } from "react";
import { getFirestore } from "../firebase/client";
import { useRouter } from "next/router";

export default function useCreateStore({ formData } = {}) {
    const [loadingCreateStore, setLoadingCreateStore] = useState(false)

    const router = useRouter()

    const handleCreateStore = useCallback((e) => {
        e.preventDefault();
        setLoadingCreateStore(true)
        const db = getFirestore();
        db.collection('stores').add(formData)
            .then((res) => {
                console.log(res)
                setLoadingCreateStore(false)
                router.push(`/ecommerce/${formData.name}`)
            })
            .catch(err => console.log(err))
    }, [formData])

    return {
        loadingCreateStore,
        handleCreateStore
    };
}