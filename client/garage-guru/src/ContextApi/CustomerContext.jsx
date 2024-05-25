import React, { createContext, useState } from 'react'

export const addCustomerResponseContext = createContext()
export const addServiceResponseContext = createContext()

function CustomerContext({ children }) {
    const [addCustomerResponse, setAddCustomerResponse] = useState("")
    const [addServiceResponse, setAddServiceResponse] = useState("")
    return (
        <>

            <addCustomerResponseContext.Provider value={{ addCustomerResponse, setAddCustomerResponse }}>
                <addServiceResponseContext.Provider value={{addServiceResponse, setAddServiceResponse}}>
                    {children}
                </addServiceResponseContext.Provider>
            </addCustomerResponseContext.Provider>

        </>
    )
}

export default CustomerContext