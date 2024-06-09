'use client'

import React, {useState} from "react";
import {ListMatchesFilterTypeEnum, Match, MatchRoundEnum} from "@/client";
import {COUNTRY_CODES, UEFA_RANKINGS} from "@/app/util/teams";
import Entry from "@/app/components/ticket/entry";
import {getClippedTextForTeam} from "@/app/components/ticket/clipped-text";
import {getFlagUrlForCountry} from "@/app/util/flag";
import {DROP_DOWN, DROP_UP} from "@/app/components/ticket/drop-downs";

interface TicketProps {
    match: Match,
    collapse: boolean,
    filterType: ListMatchesFilterTypeEnum
}

export default function Ticket(props: TicketProps): React.JSX.Element {

    const [collapse, setCollapse] = useState<boolean>(props.collapse)

    const RoundToString: Map<MatchRoundEnum, string> = new Map([
        [MatchRoundEnum.GroupStage, "Group Stage"],
        [MatchRoundEnum.RoundOfSixteen, "Round of Sixteen"],
        [MatchRoundEnum.QuarterFinal, "Quarter-Final"],
        [MatchRoundEnum.SemiFinal, "Semi-Final"],
        [MatchRoundEnum.Final, "Final"]
    ])

    return (
        <div className="w-full max-w-lg p-3 text-gray-600 relative">
            <div className="w-full p-3 flex-row justify-between max-w-xl rounded-large bg-gray-200"
                 style={{height: "6.5rem"}} onClick={() => setCollapse(!collapse)}>
                <div className="flex justify-around" style={{marginTop: "-20px"}}>
                    {props.filterType === ListMatchesFilterTypeEnum.Live &&
                        <div className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>}
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
                <div className={"w-full flex justify-center content-center items-center animate-bounce"}
                     style={{marginTop: "-25px"}}>
                    {collapse ? DROP_DOWN : DROP_UP}
                </div>
            </div>
            {!collapse && <div
                className="w-full p-3 flex-row justify-between max-w-xl rounded-large bg-gray-200 animate-appearance-in">
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
                            {props.match.datetime.toLocaleDateString("en-GB", {timeZone: "Europe/London"}) + " " + props.match.datetime.toLocaleTimeString("en-GB", {timeZone: "Europe/London"})}
                        </div>
                    </div>
                </div>
            </div>}
            {props.filterType === ListMatchesFilterTypeEnum.Upcoming && <div
                className="w-full max-w-xl p-3 rounded-large border-gray-200 border-2 animate-appearance-in animation-delay-0">
                <Entry match={props.match} disable={props.filterType !== ListMatchesFilterTypeEnum.Upcoming}/>
            </div>}
            {(props.filterType === ListMatchesFilterTypeEnum.Live || props.filterType === ListMatchesFilterTypeEnum.Completed) &&
                <>PlaceHolder for submitted entry and historic score</>
            }
        </div>
    )
}