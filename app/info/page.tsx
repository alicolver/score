import React from "react";
import {Header} from "@/app/components/landing-header";

export default function MoreInfo(): React.JSX.Element {
    return(
        <main
            className="bg-gray-900 flex flex-col items-center justify-between p-10 h-svh overflow-hidden text-white">
            <Header/>
            <div className="max-w-3xl absolute text-center pt-40">
                <p className="text-2xl">About</p>
                <p>Predictaball is a game where you are challenged to predict the scores of *every* game that
                takes place during Euro 2024. The better your predictions are, the more points you will receive.
                </p>
                <p className="pt-10 text-2xl">The Prize</p>
                <p>Bragging rights, and £100 :)</p>

                <p className="pt-10 text-2xl">Scoring</p>
                <p>5 points for a correct score</p>
                <p>2 points for a correct result</p>
            </div>
        </main>
    )
}