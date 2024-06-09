'use client'

import React, {useState} from "react";
import {ResetPasswordConfirmRequest, ResetPasswordRequest} from "@/client";
import {AUTH_CLIENT} from "@/app/api/api";
import {navigateTo} from "@/app/actions";
import {Button, Input} from "@nextui-org/react";
import {EyeFilledIcon, EyeSlashFilledIcon} from "@nextui-org/shared-icons";
import {BUTTON_CLASS} from "@/app/util/css-classes";
import Link from "next/link";

export default function Reset() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [otp, setOtp] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    const [isLoadingCode, setIsLoadingCode] = useState(false)
    const [isLoadingConfirmation, setIsLoadingConfirmation] = useState(false)
    const [isRequested, setIsRequested] = useState(false)
    const [didFail, setDidFail] = useState(false)

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleVerificationCodeRequest: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault()

        const requestBody: ResetPasswordRequest = {
            email: email
        }

        setIsLoadingCode(true)

        try {
            await AUTH_CLIENT.authApi.resetPassword({resetPasswordRequest: requestBody})
            setIsRequested(true)
        } catch (error) {
            setDidFail(true)
        }

        setIsLoadingCode(false)
    }

    const handlePasswordResetRequest: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault()

        const requestBody: ResetPasswordConfirmRequest = {
            email: email,
            otp: otp,
            password: password
        }

        setIsLoadingConfirmation(true)

        try {
            await AUTH_CLIENT.authApi.resetPasswordConfirm({resetPasswordConfirmRequest: requestBody})
            await navigateTo("login?reset")
        } catch (error) {
            setDidFail(true)
        }

        setIsLoadingConfirmation(false)
    }

    return (
        <section>
            <div className="bg-gray-900 flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <h1 className="text-white pb-20">
                    <Link href="/">PREDICTABALL.LIVE</Link>
                </h1>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 items-center justify-between md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Reset your password
                        </h1>
                        <div>
                            <Input
                                onChange={(event) => {
                                    setDidFail(false)
                                    setEmail(event.target.value)
                                }}
                                type="email"
                                name="email"
                                id="email"
                                label="Email"
                                isInvalid={didFail}
                                style={{fontSize: "18px"}}
                                disabled={isRequested}
                                value={email}
                            />
                        </div>
                        <Button
                            onClick={handleVerificationCodeRequest}
                            disabled={isRequested}
                            isLoading={isLoadingCode}
                            type="submit"
                            className={"w-full " + BUTTON_CLASS + " disabled:bg-gray-300"}>
                            Request Verification Code
                        </Button>
                        <div>
                                <Input
                                    onChange={(event) => {
                                        setDidFail(false)
                                        setOtp(event.target.value)
                                    }}
                                    type="text"
                                    name="verification code"
                                    id="otp"
                                    label="Verification Code"
                                    style={{fontSize: "18px"}}
                                    isDisabled={!isRequested}
                                />
                        </div>
                        <div>
                            <Input
                                label="New Password"
                                onChange={(event) => {
                                    setPassword(event.target.value)
                                    setDidFail(false)
                                }}
                                value={password}
                                style={{fontSize: "18px"}}
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                        {isVisible ? (
                                            <EyeSlashFilledIcon
                                                className="text-2xl text-default-400 pointer-events-none"/>
                                        ) : (
                                            <EyeFilledIcon
                                                className="text-2xl text-default-400 pointer-events-none"/>
                                        )}
                                    </button>
                                }
                                type={isVisible ? "text" : "password"}
                                isInvalid={didFail}
                                isDisabled={!isRequested}
                            />
                        </div>
                        <Button
                            disabled={!isRequested}
                            onClick={handlePasswordResetRequest}
                            isLoading={isLoadingConfirmation}
                            type="submit"
                            className={"w-full " + (!isRequested ? "bg-gray-300" : BUTTON_CLASS)}>
                            Reset Password
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
