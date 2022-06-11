import { useRouter } from 'next/router'
import { useAuth } from '../../../context/AuthContext'

const Post = () => {
    const router = useRouter()
    const { currentUser, loginWithGoogle, logout } = useAuth()
    const { id } = router.query
    console.log(currentUser)
    const handleLogout = () => {
        logout()
        router.push(`/`)
    }
    return (
        <>
            <h1>Post: {id}</h1>
            <button onClick={handleLogout}>logout</button>
        </>
    )
}

export default Post