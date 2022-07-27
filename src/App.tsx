import React, {FunctionComponent} from 'react';
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Main from "./Components/Main/main";
import Instruction from "./Components/Instruction/instruction";

const App: FunctionComponent = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Instruction/>
            <Footer/>
        </div>
    );
}

export default App;
