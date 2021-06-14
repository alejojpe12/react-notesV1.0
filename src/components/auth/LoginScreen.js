import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth'
import { animation } from '../../helpers/animation'

export const LoginScreen = () => {
    
    const dispatch = useDispatch()

    const {loading} = useSelector(state => state.ui)


    const[formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    })

    const {email, password} = formValues;

        const handleLogin = (e) => {
            e.preventDefault();
            dispatch(startLoginEmailPassword (email, password))
        }

    const handleGoogleLogin = ()=> {
        dispatch( startGoogleLogin() );
    }
    
    // let clase = "animate__animated animate__fadeInLeftBig"
    
    // const changeClass = () => {
    //         clase = "animate__animated animate__fadeInLeftBig"
    //         console.log(clase)
    // }


    return (
        <>
            <div id="auth-container" className= {`auth__box-container animate__animated animate__fadeInRightBig`}>

            <h3 className="auth__title">login</h3>
            <form 
                onSubmit={handleLogin }
                // className={ clase }
            >
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <button
                    type="Submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading }
                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                </div>
                <Link 
                    to="/auth/register"
                    className="link"
                    // onClick={changeClass}
                >
                    Create a new account
                </Link>
            </form>
            </div>
        </>
    )
}
