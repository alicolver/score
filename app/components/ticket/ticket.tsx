import React from "react";
import {Match, MatchRoundEnum} from "@/client";
import {COUNTRY_CODES, UEFA_RANKINGS} from "@/app/util/teams";
import Entry from "@/app/components/ticket/entry";
import {getClippedTextForTeam} from "@/app/components/ticket/clipped-text";
import {getFlagUrlForCountry} from "@/app/util/flag";

interface TicketProps {
    match: Match
}

export default function Ticket(props: TicketProps): React.JSX.Element {

    const RoundToString: Map<MatchRoundEnum, string> = new Map([
        [MatchRoundEnum.GroupStage, "Group Stage"],
        [MatchRoundEnum.RoundOfSixteen, "Round of Sixteen"],
        [MatchRoundEnum.QuarterFinal, "Quarter-Final"],
        [MatchRoundEnum.SemiFinal, "Semi-Final"],
        [MatchRoundEnum.Final, "Final"]
    ])

    return (
        <div className="w-full p-3 text-gray-600 relative">
            <div className="w-full p-3 flex-row justify-between max-w-xl rounded-large bg-gray-200">
                <div className="flex justify-around" style={{marginTop: "-20px"}}>
                    <div className="content-center">
                    <span style={getClippedTextForTeam(getFlagUrlForCountry(props.match.homeTeam))}>
                        {COUNTRY_CODES[props.match.homeTeam.toLowerCase()]}
                    </span>
                    </div>
                    <div className="content-center">
                        <div style={getClippedTextForTeam(getFlagUrlForCountry(props.match.awayTeam))}>
                            {COUNTRY_CODES[props.match.awayTeam.toLowerCase()]}
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between" style={{marginTop: "-20px"}}>
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
                            {RoundToString.get(props.match.round)}
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
            <div className={"w-full max-w-xl p-3 rounded-large border-gray-200 border-2"} >
                <Entry match={props.match}/>
            </div>
        </div>
    )
}