import {InfoIcon} from "@nextui-org/shared-icons";
import React from "react";
import Link from "next/link";

export function MatchesHeader(props: { showInfoButton: boolean, title: string }) {
    return <div className="flex items-center w-full text-center">
        {props.showInfoButton ? (
                <>
                    <div className="w-1/4"></div>
                    <span className="w-1/2 text-white text-l font-bold mr-4">{props.title}</span>
                    <Link href="/info">
                        <div className="w-1/4 inline-block"><InfoIcon color="white"/></div>
                    </Link>
                </>)
            : <p className="w-full text-center text-white text-l font-bold mt-3">{props.title}</p>
        }
    </div>
}