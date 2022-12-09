import { createContext, useState } from "react";

type AppContextType = {
    switcherChecked: boolean, 
    setSwitcherChecked: React.Dispatch<React.SetStateAction<boolean>>
}

type AppContextProviderProps = {
    children: React.ReactNode
}

export const AppContext = createContext<AppContextType>({
    switcherChecked: true, 
    setSwitcherChecked: () => {}
})

export const AppContextProvider = ({ children}: AppContextProviderProps ) => {

    const [switcherChecked, setSwitcherChecked] = useState<boolean>(true);

    return (
        <AppContext.Provider value={{ switcherChecked, setSwitcherChecked }}>
            {children}
        </AppContext.Provider>
    )
}