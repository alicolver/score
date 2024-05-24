import React from "react";
import AnimatedFlags from "@/app/components/AnimatedFlags";

export default async function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-10 overflow-hidden">
            <div className="z-10 w-full items-center justify-between text-sm lg:flex">
                PREDICTABALL.LIVE
            </div>
            <div className="w-full text-center z-40">
                <div className="text-6xl mt-40">
                    Football Just Got <p
                    className="bg-gradient-to-r from-blue-600 to-green-300 inline-block text-transparent bg-clip-text">Funner</p>
                </div>
                <div>
                    A Euro 2024 Score Predictor.
                </div>
            </div>

            <AnimatedFlags bottom={"10%"} invert={false}/>
            <AnimatedFlags bottom={"22.5%"} invert={true}/>
            <AnimatedFlags bottom={"35%"} invert={false}/>
        </main>
    );
}
