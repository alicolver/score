import React from "react";
import {getFlagUrlForCountry} from "@/app/util/flag";
import {toTitleCase} from "@/app/util/text";

interface TicketProps {
    homeTeam: string,
    awayTeam: string
}

export default function Ticket(props: TicketProps): React.JSX.Element {

    function getClippedTextForTeam(team: string): React.CSSProperties {
        return {
            backgroundImage: "url('" + getFlagUrlForCountry(team) + "')",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: "30px",
            WebkitTextStrokeColor: "black",
            WebkitTextStrokeWidth: "0.1px"
        }
    }

    return (
        <div className="w-full p-5">
            <div className="w-full p-3 max-w-xl flex-row rounded-small bg-white">
                <div className="content-center">
                    <div style={getClippedTextForTeam(props.homeTeam)}>
                        {props.homeTeam.toUpperCase().slice(0, 3)}
                    </div>
                    <div className="text-xs justify-center">
                        {toTitleCase(props.homeTeam)}
                    </div>
                </div>
                <div className="content-center">
                    <div style={getClippedTextForTeam(props.awayTeam)}>
                        {props.awayTeam.toUpperCase().slice(0, 3)}
                    </div>
                    <div className="text-xs">
                        {toTitleCase(props.awayTeam)}
                    </div>
                </div>
            </div>
        </div>
    )
}