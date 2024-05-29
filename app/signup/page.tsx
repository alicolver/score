'use client'

import React, { useState } from "react"
import validatePassword from "../auth/password"
import {AUTH_CLIENT} from "../api/api"
import {SignupRequest} from "@/client";
import {navigateTo} from "@/app/actions";
import {Button, Input} from "@nextui-org/react";
import {BUTTON_CLASS} from "@/app/util/css-classes";
import Link from "next/link";

export default function SignUp() {

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(true)
    const [password, setPassword] = useState('')
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const [doPasswordsMatch, setDoPasswordsMatch] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const handleEvent: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault()

        const signupRequest: SignupRequest = {
            email: email,
            password: password,
            firstName: firstName,
            familyName: lastName
        }

        setIsLoading(true)

        try {
            await AUTH_CLIENT.userApi.signup({signupRequest})
            setIsLoading(false)
            await navigateTo("login")
        } catch (error) {
            setIsLoading(false)
        }
    }

    function handlePasswordChange(val: string): void {
        setIsPasswordValid(validatePassword(val))
        setPassword(val)
    }

    function handleConfirmPasswordChange(val: string): void {
        setDoPasswordsMatch(val === password)
    }

    function handleEmailChange(val: string): void {
        const lowerCaseEmail = val.toLowerCase()
        setEmail(lowerCaseEmail)
        setValidEmail(emailRegex.test(email))
    }

    function isFormValid(): boolean {
        return !doPasswordsMatch || !isPasswordValid || !validEmail || firstName === "" || lastName === "";
    }

    return(
        <section className="bg-gray-900 h-screen">
            <div className="bg-gray-900 flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <h1 className="text-white pb-10">
                    <Link href="/">PREDICTABALL.LIVE</Link>
                </h1>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bborder-gray-700 align-bottom">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign Up For An Account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <Input
                                    onChange={(input) => setFirstName(input.target.value)}
                                    type="name"
                                    name="firstname"
                                    id="firstname"
                                    label="First Name"
                                />
                            </div>
                            <div>
                                <Input
                                    onChange={(input) => setLastName(input.target.value)}
                                    type="name"
                                    name="lastname"
                                    id="lastname"
                                    label="Last Name"
                                />
                            </div>
                            <div>
                                <Input
                                    onChange={(input) => handleEmailChange(input.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    label="email"
                                    isInvalid={!validEmail}
                                />
                            </div>
                            <div>
                                <Input
                                    onChange={(input) => handlePasswordChange(input.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    label="Password"
                                />
                            </div>
                            <div>
                                <Input
                                    onChange={(input) => handleConfirmPasswordChange(input.target.value)}
                                    type="password"
                                    name="confirmpassword"
                                    id="confirmpassword"
                                    label="Confirm Password"
                                    isInvalid={!doPasswordsMatch}
                                />
                            </div>
                            <Button
                                onClick={handleEvent}
                                isLoading={isLoading}
                                disabled={isFormValid()}
                                type="submit"
                                className={"w-full " + BUTTON_CLASS}>
                                Create Account
                            </Button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="/login"
                                                            className="font-medium text-indigo-600 hover:underline">Sign
                                In</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}