import React from "react";
import AnimatedFlags from "@/app/components/AnimatedFlags";
import {Header} from "@/app/components/LandingHeader";


export default async function Home() {
    return (
        <main className="dark:bg-gray-900 flex-col items-center justify-between p-10 h-screen overflow-hidden dark:text-white">
            <Header/>
            <div className="w-full text-center z-40">
                <div className="relative top-0 text-6xl mt-40">
                    Football Just Got <p
                    className="bg-gradient-to-r from-blue-600 to-green-300 inline-block text-transparent bg-clip-text">Funner</p>
                </div>
                <div>
                    A Euro 2024 Score Predictor.
                </div>
            </div>

            <AnimatedFlags bottom={"10%"} invert={false}/>
            <AnimatedFlags bottom={"20%"} invert={true}/>
            <AnimatedFlags bottom={"30%"} invert={false}/>
        </main>
    );
}
