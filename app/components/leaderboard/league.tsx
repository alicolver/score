import React from "react";
import {Link} from "@nextui-org/react";
import {ClickIcon} from "@/app/components/leaderboard/click-icon";

interface LeagueProps {
    leagueId: string,
    leagueName: string,
    position: number
}

export default function LeagueComponent(props: LeagueProps): React.JSX.Element {
    return (
        <div key={props.leagueId} className="w-full flex mb-2">
            <Link href={`app/league/${props.leagueId}/leaderboard`} className="w-full">
                <div className="absolute left-5"><ClickIcon/></div>
                <div className="flex w-full justify-around rounded-3xl p-2 text-white"
                     style={{
                         backgroundColor: "#21D4FD",
                         backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)"
                     }}>
                    <div className="w-2/3 font-bold">{props.leagueName}</div>
                    <div className="w-1/3">
                        {props.position}
                    </div>
                </div>
            </Link>
        </div>

    )
}