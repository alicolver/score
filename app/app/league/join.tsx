'use client'

import React, {useState} from "react";
import {Button, Input} from "@nextui-org/react";
import {BUTTON_CLASS} from "@/app/util/css-classes";
import {LeagueApi} from "@/client";
import {getConfigWithAuthHeader} from "@/app/api/client-config";

export default function JoinLeague(): React.JSX.Element {

    const [showForm, setShowForm] = useState(false)
    const [didFail, setDidFail] = useState(false)
    const [leagueId, setLeagueId] = useState("")

    async function join() {
        try {
            const leagueApi = new LeagueApi(await getConfigWithAuthHeader())
            await leagueApi.joinLeague({ leagueId: leagueId })
            setDidFail(false)
        } catch (error) {
            setDidFail(true)
        }
    }

    return (
        <div className="w-full justify-around pt-1">
            <Button className={BUTTON_CLASS} style={{width: "100%"}} onPress={() => setShowForm(!showForm)}>
                {showForm ? "Hide Form" : "Join a League"}
            </Button>
            {showForm &&
                <div className="animate-appearance-in w-full bg-gray-100 rounded p-4">
                    Enter the League Id:
                    <Input
                        label={"League Id"}
                        isInvalid={didFail}
                        value={leagueId}
                        onChange={(event) => setLeagueId(event.target.value)}
                    />
                    <Button className={BUTTON_CLASS + " mt-4"} onPress={join}>
                        Join
                    </Button>
                </div>
            }
        </div>
    )
}