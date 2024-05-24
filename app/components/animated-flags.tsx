import FlagAnimated from "@/app/components/flag-animated";
import React from "react";
import {TEAMS} from "@/app/util/teams";

interface AnimatedFlagProps {
    bottom: string,
    invert: boolean
}

export default function AnimatedFlags(props: AnimatedFlagProps): React.JSX.Element {

    function getFlags(): React.JSX.Element[] {
        const shuffledTeams = TEAMS.sort(() => 0.5 - Math.random())
        return shuffledTeams.slice(0, 10).map((team, i) => 
            <FlagAnimated
                bottom={props.bottom}
                index={i}
                key={i}
                invert={props.invert}
                country={team}
            />
        )
    }

    return(
        <>
            {getFlags()}
        </>
    )
}