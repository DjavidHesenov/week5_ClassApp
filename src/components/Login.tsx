import React from 'react'
import { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
// import { IUser } from '../interfaces'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth'

const Login: React.FC = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const submitHandler = () => {
        if (email && password) {
            // const newLogin: IUser = {
            //     email: email,
            //     password: password
            // }

            dispatch(authActions.login())
            history.push('/')
        }
    }

    return (
        <>
            <div className="grid place-items-center h-screen">
                <form className="bg-slate-200 shadow-md rounded px-12 pt-6 pb-12 mb-4 justify-content: center;">
                    <h1 className="text-blue-600 font-bold mb-5">Sign In to continue</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input 
                        value={email} 
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input 
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*************" />
                    </div>
                    <div className="flex items-center justify-between">
                        <NavLink to="/" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Back
                        </NavLink>
                        <button onClick={submitHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
