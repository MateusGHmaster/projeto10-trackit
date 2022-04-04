import { createContext } from 'react';
import { useState } from 'react';

const ProgressContext = createContext();

export function ProgressContextProvider ({ children }) {
    
    const [progress, setProgress] = useState('');

    function getProgress (progressed, result) {
        if (result === 0) {
            setProgress(0);
        }
        setProgress((progressed / result) * 100);
    }
    
    return (

        <ProgressContext.Provider value={{ progress, getProgress }}>
            {children}
        </ProgressContext.Provider>

    );

}

export default ProgressContext;