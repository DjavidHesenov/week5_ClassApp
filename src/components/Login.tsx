import React from 'react'
import { NavLink } from 'react-router-dom'
// import { IUser } from '../interfaces'
import { authActions } from '../store/auth'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'

const { login } = authActions

type MyProps = RouteComponentProps<PathParamsType> & {
    someString: string,
    dispatch: any
}

interface MyState { email: string, password: string };

type PathParamsType = {
    param1: string,
}

class Login extends React.Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    submitHandler = () => {
        if (this.state.email && this.state.password) {
            // const newLogin: IUser = {
            //     email: email,
            //     password: password
            // }
            this.props.dispatch(login())
            this.props.history.push('/')
        }
    }

    render() {
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
                                value={this.state.email}
                                onChange={e => this.setState({ password: this.state.password, email: e.target.value })}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                value={this.state.password}
                                onChange={e => this.setState({ email: this.state.email, password: e.target.value })}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*************" />
                        </div>
                        <div className="flex items-center justify-between">
                            <NavLink to="/" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Back
                            </NavLink>
                            <button onClick={this.submitHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}


const mapStateToProps = (state: any) => ({
    email: state.email,
    password: state.password,
});

export default connect(mapStateToProps)(withRouter(Login))
