'use client'

import React, {useState} from "react";
import {LoginRequest} from "@/client";
import {AUTH_CLIENT, TOKEN_COOKIE_KEY} from "@/app/api/api";
import {navigateTo} from "@/app/actions";
import Cookies from "js-cookie";
import {Input} from "@nextui-org/react";

export default function Home() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEvent: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault()

        const requestBody: LoginRequest = {
            email: email,
            password: password
        }

        try {
            const response = await AUTH_CLIENT.authApi.login({ loginRequest: requestBody })
            if (!response.idToken) {
                alert("error making login request")
                return
            }
            Cookies.set(TOKEN_COOKIE_KEY, response.idToken)
            await navigateTo("app")
        } catch (error) {
            alert("failed login")
        }
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <Input
                                    onChange={(event) => setEmail(event.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    label="email"
                                />
                            </div>
                            <div>
                                <Input
                                    onChange={(event) => setPassword(event.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    label="password"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <a href="#"
                                   className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                                    password?</a>
                            </div>
                            <button onClick={handleEvent} type="submit"
                                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign
                                in
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account yet? <a href="/signup"
                                                              className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign
                                up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
