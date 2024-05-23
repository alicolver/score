import FlagAnimated from "@/app/components/FlagAnimated";
import React from "react";

export default function AnimatedFlags(): React.JSX.Element {

    function getFlags(): React.JSX.Element[] {
        const flags = []
        for (let i = 0; i < 10; i++) {
            flags.push(<FlagAnimated index={i} key={i} invert={false}/>)
        }
        return flags;
    }

    return(
        <>
            {getFlags()}
        </>
    )
}