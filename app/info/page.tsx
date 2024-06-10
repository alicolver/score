import React from "react";
import {Header} from "@/app/components/landing-header";

export default function MoreInfo(): React.JSX.Element {
    return(
        <main
            className="bg-gray-900 flex flex-col items-center justify-between p-10 h-svh overflow-hidden text-white">
            <Header/>
            <div className="max-w-3xl absolute text-center pt-40">
                <p className="text-2xl">About</p>
                <p>Predictaball is a game where you are challenged to predict the scores of <span className="font-bold">every</span> game that
                takes place during Euro 2024 &#9917; 
                <p>The better your predictions are, the more points you will receive &#128175;</p>
                </p>
                <p>Upcoming games will be displayed for the next 2 match days, come back each day to submit your predictions</p>
                <p className="pt-10 text-2xl">The Prize</p>
                <p>Bragging rights &#128512;</p>
                <p>Create leagues and invite friends if you want to stake a prize or come up with some forfeits &#127942;</p>

                <p className="pt-10 text-2xl">Scoring</p>
                <p>5 points for a correct score &#129306;</p>
                <p>2 points for a correct result &#9996;</p>
                <p>&#10024; Look out for an updated scoring system during knockout games &#10024;</p>
            </div>
        </main>
    )
}