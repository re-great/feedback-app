import { BrowserRouter as Router , Link, Route , Routes } from "react-router-dom"

import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackForm from "./components/FeedbackForm"
import About from "./pages/About"
import AboutLink from "./components/AboutLink"
import {FeedbackProvider} from "./context/FeedbackContext"


function App(){

    return (
        <FeedbackProvider>
        <Router>
           <Header />
           
            <div className="container">
            <Routes>
                <Route exact path='/' element={
                    <>
                        <FeedbackForm />
                        <FeedbackList />
                    </>
                }>  
                </Route>

                <Route path='/about' element = {<About />}> </Route>
            </Routes>
            <AboutLink />
            </div>

        </Router>
        </FeedbackProvider>
    )
}

export default App