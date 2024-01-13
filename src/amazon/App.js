
import Header from "./Header"
import Productcards from "./Productcards"
import Advertisements from "./Advertisement"
import React from 'react';
import { MyContextProvider } from './MyContext';


function App() {
    return(
        <>
           <MyContextProvider>

            <Header logo={<i className="logo bi bi-amazon"></i>} />
            <Advertisements add1="https://images-eu.ssl-images-amazon.com/images/G/31/img20/LEO/Jup23/Phase3/P3_NTA_PC_HEADER_LN.jpg"/>
            <Productcards />
            
            </MyContextProvider>

        </>
    )
}

export default App