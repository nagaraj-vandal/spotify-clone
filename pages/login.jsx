// import React from 'react'
import {getProviders , signIn} from "next-auth/react"

function Login({providers}) {
    console.log(Object.keys(providers))
    return (
        <div className="flex items-center flex-col min-h-screen bg-black w-full justify-center">
           <img src="https://links.papareact.com/9xl" alt="" className="w-52 mb-5" />
           {Object.values(providers).map((provider) => (
               <button 
               className="bg-[#18D860] p-4 text-white rounded-lg"
               onClick={() => signIn(provider.id , {callbackUrl : "/"})}
               >Login with {provider.name}</button>
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
