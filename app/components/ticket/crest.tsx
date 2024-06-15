import React from "react";
import Image from "next/image";
import {getCrestUrlForCountry, getFlagUrlForCountry} from "@/app/util/flag";

interface CrestProps {
    country: string,
    large: boolean
}

export default function Crest(props: CrestProps): React.JSX.Element {
    return (
        <div className="flex flex-col items-center">
            <Image
                src={getCrestUrlForCountry(props.country)}
                alt={props.country}
                width={0}
                height={0}
                unoptimized={true}
                style={{
                    maxWidth: props.large ? "90px" : "75px",
                    width: "auto",
                    height: "auto",
                    maxHeight: props.large ? "90px" : "75px"
            }}
            />
            <span className="text-center text-xs font-bold text-white">
                {props.country.charAt(0).toUpperCase() + props.country.slice(1)}
            </span>
        </div>
    )
}