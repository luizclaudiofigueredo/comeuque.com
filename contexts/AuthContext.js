import { createContext, useContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../lib/firebase'

const AuthContext = createContext()

export const AuthContextProvider = ({
  children,
}) => {

  const [user, setUser] = useState(null)
  const [isLoggedIn, setisLoggedIn] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setisLoggedIn(true)
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        })        
      } else {
        setisLoggedIn(false)
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  const login = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then((re) => {
      setisLoggedIn(true)
      setUser({
        uid: re.user.uid,
        email: re.user.email,
        displayName: re.user.displayName,
        photoURL: re.user.photoURL,
      })
    })
    .catch((err) => {
      console.log(err)
    })
  } 
  
  const logout = async () => {
    try {
      await signOut(auth)
      setisLoggedIn(false)
    } catch(err) {
      console.log(err)
    }
  }   

  return (
    <AuthContext.Provider value={{ user , login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthContext, useAuth}