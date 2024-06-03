'use client'

import React, {useState} from "react";
import {Input, Button} from "@nextui-org/react";

export default function NumberInput(): React.JSX.Element {

    const [value, setValue] = useState(0)
    const [error, setError] = useState(false)

    function handleUpdate(event: React.ChangeEvent<HTMLInputElement>) {
        const asNumber = Number(event.target.value)
        if (isNaN(asNumber)) {
            setError(true)
            return
        }
        setError(false)
        console.log(asNumber)
        setValue(asNumber)
    }

    function handleIncrease() {
        setValue(value + 1)
    }

    function handleDecrease() {
        setValue(value - 1)
    }

    return (<div className="flex p-2">
        <Button disabled={value === 0} isIconOnly className="rounded-3xl mr-3 bg-gradient-to-r from-sky-500 from-10% to-emerald-500 to-90%" onClick={handleDecrease}>
            <svg xmlns={"http://www.w3.org/2000/svg"} height="32px" viewBox="0 -960 960 960" width="32px"
                 fill="#FFFFFF">
                <path d="M200-440v-80h560v80H200Z"/>
            </svg>
        </Button>
        <Input isInvalid={error} variant="bordered" className="w-10 font-bold" value={value.toString()} onChange={event => handleUpdate(event)}/>
        <Button disabled={value === 19} isIconOnly className="rounded-3xl ml-3 bg-gradient-to-r from-sky-500 from-10% to-emerald-500 to-90%" onClick={handleIncrease}>
            <svg xmlns={"http://www.w3.org/2000/svg"} height="32px" viewBox="0 -960 960 960" width="32px"
                 fill="#FFFFFF">
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
            </svg>
        </Button>
    </div>)
}