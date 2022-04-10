//DEJENLO COMENTADO
// import React, {useState} from 'react'
// import { useEffect } from 'react'
// import getPlain from '../actions/getPlain'
// const Context = React.createContext({})

// export function UserContextProvider ({children}) {
//   const [plains, setPlains] = useState([])
//   const [jwt, setJWT] = useState(
//     () => window.sessionStorage.getItem('jwt')
//   )

//   useEffect(() => {
//     if (!jwt) return setPlains([])
//     getPlain({jwt}).then(setPlains)
//   }, [jwt])

//   return <Context.Provider value={{
//     plains: plains,
//     jwt,
//     setPlains: setPlains,
//     setJWT
//   }}>
//     {children}
//   </Context.Provider>
// }

// export default Context