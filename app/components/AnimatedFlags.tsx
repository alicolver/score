import FlagAnimated from "@/app/components/FlagAnimated";
import React from "react";
import {TEAMS} from "@/app/util/teams";

interface AnimatedFlagProps {
    bottom: string,
    invert: boolean
}

export default function AnimatedFlags(props: AnimatedFlagProps): React.JSX.Element {

    function getFlags(): React.JSX.Element[] {
        const shuffledTeams = TEAMS.sort(() => 0.5 - Math.random())
        const selectedTeams = shuffledTeams.slice(0, 10)
        const flags = []
        for (let i = 0; i < 10; i++) {
            flags.push(<FlagAnimated
                bottom={props.bottom}
                index={i}
                key={i}
                invert={props.invert}
                country={selectedTeams[i]}
            />)
        }
        return flags;
    }

    return(
        <>
            {getFlags()}
        </>
    )
}