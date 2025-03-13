import { createContext, useContext, useEffect, useState } from "react";
import localStorage from "../utils/localStorage";
import authService from "../services/authService";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../store/slice/appSlice";
import { jwtDecode } from "jwt-decode";
import { navigate } from "../navigation/refNavigation";
import { SCREEN_PATH } from "../navigation/PathNavigator";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)    
    const dispatch = useDispatch()    

    const checkAuth = async () => {
        dispatch(startLoading())
        try {        
            const token = await authService.getCurrentUser()
            const user = jwtDecode(token)
            if (user) {            
                setCurrentUser(user)
            }
        } catch (error) {
            throw error;            
        }finally {
            dispatch(stopLoading())
        }
    }
    
    useEffect(() => {
      checkAuth()  
    },[])

    const login = async (username,password) => {
        dispatch(startLoading())
        try {
            const token = await authService.login(username,password)      
            const user = jwtDecode(token)      
            if (user) setCurrentUser(user)
            return true
        } catch (error) {
            throw error            
        }finally{
            dispatch(stopLoading())
        }
    }

    const logout = async () => {
        dispatch(startLoading())
        try {
            await authService.logout()            
            setCurrentUser(null)
            navigate(SCREEN_PATH.LOGIN)       
        } catch (error) {
            throw error            
        }finally{
            dispatch(stopLoading())
        }
    }

    return (
        <AuthContext.Provider value={{currentUser,login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext)
}