import React from 'react';
import { useContext } from 'react';


const themes = {
    light:{
        foreground:"red",
        background:"grey"
    },
    dark:{
        foreground:"blue",
        background:"yellow"
    }
};

const ThemeContext = React.createContext(themes.dark);

function App(){
    return (
       
         <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
         </ThemeContext.Provider>
       
    );
}

export default function Toolbar() {
    return(
        <div>
    <UseContext />
    </div>
    );
}

 function UseContext(props) {
    const theme = useContext(ThemeContext);
    return (
       <>
       <div className="container">
        <div className="row mt-5">
            <div className="col">
                <button style={{background: theme.background,color:theme.foreground}}>
                    I am styled by theme contaxt

                </button>
            </div>
        </div>
       </div>
       </>
    )
}

