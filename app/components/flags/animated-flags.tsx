import FlagAnimated from "@/app/components/flags/flag-animated";
import React from "react";
import {TEAMS} from "@/app/util/teams";

interface AnimatedFlagProps {
    bottom: string,
    invert: boolean
}

export default function AnimatedFlags(props: AnimatedFlagProps): React.JSX.Element {

    function getFlags(): React.JSX.Element[] {
        return TEAMS.sort(() => 0.5 - Math.random())
            .slice(0, 20)
            .map((team, i) =>
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