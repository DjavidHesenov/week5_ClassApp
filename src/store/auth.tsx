import { createSlice } from "@reduxjs/toolkit"

interface AuthState {
    isAuthenticated: boolean
}  

const initialAuthState: AuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            localStorage.setItem('isAuth', JSON.stringify(true))
            state.isAuthenticated = true
        },
        logout(state) {
            localStorage.setItem('isAuth', JSON.stringify(false))
            state.isAuthenticated = false
        }
    }
})
export const authActions = authSlice.actions

export default authSlice.reducer