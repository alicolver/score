import React from "react";
import AnimatedFlags from "@/app/components/animated-flags";
import {Header} from "@/app/components/landing-header";
import {Button} from "@nextui-org/react";


export default async function Home() {

    function getFlags(): React.JSX.Element {
        return Array.from(Array(3).keys()).map(i => {
            return <AnimatedFlags bottom={`${(i * 10)+20}%`} invert={i % 2 == 0} key={i}/>
        })
    }

    return (
        <main
            className="bg-gray-900 flex flex-col items-center justify-between p-10 h-screen overflow-hidden text-white">
            <Header/>
            <div className="w-full absolute text-center z-40">
                <div className="relative top-0 text-6xl lg:mt-40 mt-30 pt-20">
                    Football Just Got <p
                    className="bg-gradient-to-r from-blue-600 to-green-300 inline-block text-transparent bg-clip-text">Funner</p>
                </div>
                <div>
                    A Euro 2024 Score Predictor.
                </div>
            </div>

            {getFlags()}

            <div>
                <Button className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white">
                    Find Out More
                </Button>
            </div>
        </main>
    );
}
