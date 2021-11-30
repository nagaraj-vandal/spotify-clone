// import React from 'react'
import {getProviders , signIn} from "next-auth/react"

function Login({providers}) {
    console.log(Object.keys(providers))
    return (
        <div>
           <img src="https://links.papareact.com/9xl" alt="" className="w-52 mb-5" />
           {Object.values(providers).map((provider) => (
               <button>Login with {provider.name}</button>
           ))}
        </div>
    )
}

export default Login


export  async function getServerSideProps(){
    const providers = await getProviders()

    return {
        props : {
            providers
        }
    }
}
