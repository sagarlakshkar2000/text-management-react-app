import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


function Home() {

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
            setTimeout(() =>{
                setAlert(null);
            },4000)



    }



    return (

        < >
            {<Navbar title='Home' />}
            <Alert alert={alert} />
            <Textform showAlert={showAlert}/>

        </>
    )
}

export default Home