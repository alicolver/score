'use client'

import React, {useState} from "react";
import {BUTTON_CLASS} from "@/app/util/css-classes";
import {Button, Input} from "@nextui-org/react";
import {CreateLeagueRequest, LeagueApi} from "@/client";
import {navigateTo} from "@/app/actions";
import {getConfigWithAuthHeaderClient} from "@/app/api/client-config-client-side";

export default function CreateLeague(): React.JSX.Element {

    const [leagueName, setLeagueName] = useState("")
    const [createSuccess, setCreateSuccess] = useState<boolean | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(false)

    const handleEvent: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const requestBody: CreateLeagueRequest = {
            leagueName: leagueName
        }

        try {
            const leagueApi = new LeagueApi(await getConfigWithAuthHeaderClient())
            await leagueApi.createLeague({createLeagueRequest: requestBody})
            setCreateSuccess(true)
            await navigateTo("/app")
        } catch (error) {
            setCreateSuccess(false)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="bg-gray-900 flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <div>
                <span className="text-white">PREDICTABLL.LIVE</span>
            </div>
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 items-center md:space-y-6 sm:p-8 ">
                    Enter your new league name below:
                    <Input
                        label="League Name"
                        onChange={(event) => {
                            setCreateSuccess(true)
                            setLeagueName(event.target.value)
                        }}
                        isInvalid={createSuccess !== undefined && !createSuccess}
                        errorMessage="League create failed, it may already exist, try another name"
                    />
                    <div className="w-full">
                        <div>
                            <Button className={BUTTON_CLASS} onClick={handleEvent} isLoading={isLoading}>
                                Create League
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}