import { createContext, useContext, useEffect, useState } from "react";
import localStorage from "../utils/localStorage";
import authService from "../services/authService";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading,setLoading] = useState(false)

    const checkAuth = async () => {
        setLoading(true)
        try {        
            const token = await localStorage.getData('token')
            if (token) {            
                setCurrentUser(token)
            }
        } catch (error) {
            throw error;            
        }finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
      checkAuth()  
    },[])

    const login = async (username,password) => {
        setLoading(true)
        try {
            const token = await authService.login(username,password)            
            setCurrentUser(token)
            return true
        } catch (error) {
            throw error            
        }finally{
            setLoading(false)
        }
    }

    const logout = async () => {
        setLoading(true)
        try {
            await authService.logout()            
            setCurrentUser(null)
            return true
        } catch (error) {
            throw error            
        }finally{
            setLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{currentUser,login,logout,loading}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext)
}