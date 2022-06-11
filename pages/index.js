import AppLayout from "../components/AppLayout"
import { useAuth } from "../context/AuthContext"
import useRegister from "../hooks/useRegister"
import useCreateStore from "../hooks/useCreateStore"
import useStoreData from "../hooks/useStoreData"
import { useState } from "react"

export default function Home() {
  const { currentUser, logout } = useAuth()

  const { storeData, handleOnChange } = useStoreData()

  const {
    loadingCreateStore,
    handleCreateStore
  } = useCreateStore({ formData: storeData })

  const {
    error,
    loading,
    newUserMessage,
    handleRegister,
    handleEmail,
    handlePassword,
    handleConfirmPassword
  } = useRegister()

  return (
    <AppLayout>
      <h1>eCommerce</h1>

      <div>
        {
          newUserMessage
            ? <>
              <p>Estás a un paso de tener tu ecommerce completamente gratis</p>
              <p>Un gran ecommerce necesita un gran nombre</p>
              <form onSubmit={handleCreateStore}>
                <label>store name</label>
                <input name='name' type="text" onChange={handleOnChange} />
                <button>create store</button>
              </form>
              {loadingCreateStore && <p>creando store...</p>}
            </>
            : <form onSubmit={handleRegister}>
              <label>email</label>
              <input type="email" onChange={handleEmail} />
              <label>password</label>
              <input type="password" onChange={handlePassword} />
              <label>confirm password</label>
              <input type="password" onChange={handleConfirmPassword} />
              <button>singup</button>
            </form>
        }


        {error && <p>{error}</p>}
        {loading && <p>Registrando...'</p>}

        <p>{currentUser && currentUser.uid}</p>
      </div>
    </AppLayout>
  )
}
