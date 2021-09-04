import React, { useState } from 'react';
import NavBar from './NavBar';
import Form from './Form';
import About from './About';
import Alert from './Alert';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
    const [mode, Setmode] = useState('light')

    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    const toggleMode = () => {
        if (mode === 'light') {
            Setmode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark mode has been enabled", "success");
        }
        else {
            Setmode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
        }
    }

    return (
        <>
            <Router>
                <NavBar tittle="TextUtil" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className="container my-4">
                    <Switch>
                    <Route path="/about">
                    <About />
                    </Route>
                    <Route path="/">
                    <Form heading="Enter the text to analyze below" showAlert={showAlert}mode={mode}/>
                    </Route>
                    </Switch>
                </div>
        </Router>
        </>
    )
}
export default App;