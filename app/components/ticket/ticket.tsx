import React from "react";
import {getFlagUrlForCountry} from "@/app/util/flag";
import {Match} from "@/client";
import NumberInput from "./number-input";
import {COUNTRY_CODES, UEFA_RANKINGS} from "@/app/util/teams";

interface TicketProps {
    match: Match
}

export default function Ticket(props: TicketProps): React.JSX.Element {

    function getClippedTextForTeam(team: string): React.CSSProperties {
        return {
            backgroundImage: "url('" + getFlagUrlForCountry(team) + "')",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: "4.5rem",
            //WebkitTextStrokeColor: "black",
            //WebkitTextStrokeWidth: "0.1px",
        }
    }

    return (
        <div className="w-full p-5 text-gray-600">
            <div className="w-full p-3 flex-row justify-between max-w-xl rounded-large bg-gray-100">
                <div className="flex justify-around" style={{marginTop: "-20px"}}>
                    <div className="content-center">
                    <span style={getClippedTextForTeam(props.match.homeTeam)}>
                        {COUNTRY_CODES[props.match.homeTeam.toLowerCase()]}
                    </span>
                    </div>
                    <div className="content-center">
                        <div style={getClippedTextForTeam(props.match.awayTeam)}>
                            {COUNTRY_CODES[props.match.awayTeam.toLowerCase()]}
                        </div>
                    </div>
                </div>
                <div className="flex justify-around" style={{marginTop: "-20px"}}>
                    <div>
                        <NumberInput/>
                    </div>
                    <div>
                        <NumberInput/>
                    </div>
                </div>
            </div>
            <div className={"w-full max-w-xl p-3 rounded-large bg-gray-100"}>
                <div className="w-full flex justify-between">
                    <div className="flex-row">
                        <div className="font-bold">
                            UEFA RANKINGS
                        </div>
                        <div className="text-xs">
                            {`${props.match.homeTeam.toUpperCase()}: ${UEFA_RANKINGS[props.match.homeTeam.toLowerCase()]}, ${props.match.awayTeam.toUpperCase()}: ${UEFA_RANKINGS[props.match.awayTeam.toLowerCase()]}`}
                        </div>
                    </div>
                    <div className="flex-row text-right">
                        <div className="font-bold">
                            ROUND
                        </div>
                        <div className="text-xs">
                            Group Stage
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <div className="flex-row">
                        <div className="font-bold">
                            VENUE
                        </div>
                        <div className="text-xs">
                            {props.match.venue}
                        </div>
                    </div>
                    <div className="flex-row text-right">
                        <div className="font-bold">
                            DATE
                        </div>
                        <div className="text-xs">
                            {props.match.datetime.toLocaleDateString("en-GB") + " " + props.match.datetime.toLocaleTimeString("en-GB")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}