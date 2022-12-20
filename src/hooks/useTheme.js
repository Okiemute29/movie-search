import { useContext } from "react";
import { ThemeContext } from '../context/themecontext'

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if(context === undefined){
        throw new Error('useTheme() must be use inside a Themeprovider')
    }

    return context
}