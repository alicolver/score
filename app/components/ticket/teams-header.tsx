import {Match} from "@/client";
import PointsOnTop from "@/app/components/ticket/points-on-top";
import LivePulse from "@/app/components/ticket/live-pulse";
import {getClippedTextForTeam} from "@/app/components/ticket/clipped-text";
import {getFlagUrlForCountry} from "@/app/util/flag";
import {COUNTRY_CODES} from "@/app/util/teams";

interface TeamsHeaderProps {
    match: Match
}

export default function TeamsHeader(props: TeamsHeaderProps) {
    return <div className="w-full">
        <PointsOnTop prediction={props.match.prediction}/>
        <LivePulse matchState={props.match.state}/>
        <div className="flex justify-around"
             style={{opacity: props.match.prediction?.points === undefined ? "100%" : "30%"}}
        >
            <div className="content-center">
                <div style={getClippedTextForTeam(getFlagUrlForCountry(props.match.homeTeam))}>
                    {COUNTRY_CODES[props.match.homeTeam.toLowerCase()]}
                </div>
            </div>
            <div className="content-center">
                <div style={getClippedTextForTeam(getFlagUrlForCountry(props.match.awayTeam))}>
                    {COUNTRY_CODES[props.match.awayTeam.toLowerCase()]}
                </div>
            </div>
        </div>
    </div>
}