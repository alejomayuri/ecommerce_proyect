import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function useRegister() {
    const { singup } = useAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [newUserMessage, setNewUserMessage] = useState(false)

    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleConfirmPassword = (e) => setConfirmPassword(e.target.value)
    
    const handleRegister = (e) => {
        e.preventDefault();
        setLoading(true)
        if (password !== confirmPassword) {
            setError('las contraseñas son distintas');
        } else {
            singup(email, password)
                .then(() => {
                    setLoading(false)
                    setNewUserMessage(true)
                })
                .catch((error) => setError(`Error del servidor ${error}`));
        }
    };

    return {
        error,
        loading,
        newUserMessage,
        handleRegister,
        handleEmail,
        handlePassword,
        handleConfirmPassword
    };
}