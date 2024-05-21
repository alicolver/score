'use client'

import React, { useState } from "react"
import validatePassword from "../auth/password"
import {AUTH_CLIENT} from "../api/api"
import {SignupRequest} from "@/client";
import ReactPasswordChecklist from "react-password-checklist";
import {navigateTo} from "@/app/actions";

export default function SignUp() {
    
    const basicInputCss = "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    const errorInputCss = "bg-gray-50 border border-red-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(true)
    const [password, setPassword] = useState('')
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const [doPasswordsMatch, setDoPasswordsMatch] = useState(true)

    const handleEvent: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault()

        if (!isPasswordValid || !doPasswordsMatch) {
            alert("there is an error with your password")
            return
        }

        const reqBody: SignupRequest = {
            email: email,
            password: password,
            firstName: firstName,
            familyName: lastName
        }

        try {
            await AUTH_CLIENT.userApi.signup({signupRequest: reqBody})
            await navigateTo("login")
        } catch (error) {
            alert(":(")
        }
    }
    
    function handlePasswordChange(val: string) {
        setIsPasswordValid(validatePassword(val))
        setPassword(val)
    }

    function handleConfirmPasswordChange(val: string) {
        setDoPasswordsMatch(val === password)
    }

    function handleEmailChange(val: string) {
        const lowerCaseEmail = val.toLowerCase()
        setEmail(lowerCaseEmail)
        setValidEmail(emailRegex.test(lowerCaseEmail))
    }

    return(
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign Up For An Account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="first name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                            <input 
                                onChange={(input) => setFirstName(input.target.value)} 
                                type="name" 
                                name="firstname" 
                                id="firstname" 
                                className={basicInputCss}
                                placeholder="John"
                             />
                        </div>
                        <div>
                            <label 
                                htmlFor="last name" 
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Last Name
                            </label>
                            <input 
                                onChange={(input) => setLastName(input.target.value)}
                                type="name" 
                                name="lastname" 
                                id="lastname" 
                                className={basicInputCss}
                                placeholder="McGinn"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
                            <input 
                                onChange={(input) => {handleEmailChange(input.target.value)}}
                                type="email" 
                                name="email" 
                                id="email" 
                                className={validEmail ? basicInputCss : errorInputCss}
                                placeholder="scotland@champions.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input 
                                onChange={(input) => handlePasswordChange(input.target.value)} 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="••••••••" 
                                className={isPasswordValid ? basicInputCss : errorInputCss}
                            />
                            <ReactPasswordChecklist
                                rules={["minLength","lowercase","number"]}
                                minLength={6}
                                value={password}
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                            <input 
                                onChange={(input) => handleConfirmPasswordChange(input.target.value)} 
                                type="password" 
                                name="confirmpassword" 
                                id="confirmpassword" 
                                placeholder="••••••••" 
                                className={doPasswordsMatch ? basicInputCss : errorInputCss}
                            />
                        </div>
                        <button
                            onClick={handleEvent}
                            disabled={!doPasswordsMatch || !isPasswordValid}
                            type="submit"
                            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Create Account
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}