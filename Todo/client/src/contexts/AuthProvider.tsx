import axios from 'axios';
import { useEffect, useState } from 'react';
import { accounts } from '../types';
import { AuthContext } from './AuthContext';
import { API, nodeApi } from './../api';

export const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [user, setUser] = useState<accounts | null>(null)
    const token = localStorage.getItem('token')

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          }
    }, [token])



    const setToken = (token: string) => {
        localStorage.setItem('token', token)
    }

    const signin = async (token: string, user: accounts) => {
        if(token) {
            setUser(user)
            localStorage.setItem('userLOGGED', user.email)
            setToken(token)
            
            return true
        } else {
            return false
        }
        
    } 

    const request = async (email: string) => {
        //let data = await API.AccountREQUEST(email)
        let data = await nodeApi.Request(email)
        console.log('data', data)
        if(data) {
            setUser(data.user)
            return true
        }
        return false

    }

    const signout = async () => {
        setUser(null)
        localStorage.clear()
    }

    

    return (
        <AuthContext.Provider value={{user, signin, request, signout}}>
            {children}
        </AuthContext.Provider>
    )
}