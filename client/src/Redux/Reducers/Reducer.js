
import { createSlice } from "@reduxjs/toolkit";


const getInitialDarkMode = () => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) return stored === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const initialState = {
    darkMode: getInitialDarkMode(),
}



const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode
        },
        setTheme: (state, action) => {
            state.darkMode = action.payload
        }
    }
})

export default mainSlice.reducer

export const { toggleTheme, setTheme } = mainSlice.actions