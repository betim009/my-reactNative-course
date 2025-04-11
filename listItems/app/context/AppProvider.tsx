import { useState, useContext } from 'react';
import { AppContext, AppContextType } from './AppContext';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [nome, setNome] = useState("Alberto");

    const value: AppContextType = {
        nome,
        setNome,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp precisa estar dentro de um AppProvider');
    }
    return context;
};
