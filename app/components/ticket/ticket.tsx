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
            fontSize: "3em",
            WebkitTextStrokeColor: "black",
            WebkitTextStrokeWidth: "0.1px",
            position: "relative",
            display: "block"
        }
    }

    return (
        <div className="w-full p-5">
            <div className="w-full p-3 max-w-xl flex-row rounded-small bg-white">
                <div className="content-center">
                    <span style={getClippedTextForTeam(props.homeTeam)}>
                        {props.homeTeam.toUpperCase().slice(0, 3)}
                    </span>
                    <span className="relative block text-xs justify-center">
                        {toTitleCase(props.homeTeam)}
                    </span>
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