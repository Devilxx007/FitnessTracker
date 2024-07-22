import { createContext, useState } from 'react'
const Auth = createContext()

const AuthContext = ({children})=>{

    return (
        <Auth.Provider value={{}}>
            {children}
        </Auth.Provider>
    )
}