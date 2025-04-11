import { createContext } from 'react';

export type AppContextType = {
    nome: string;
    setNome: (value: string) => void;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);
