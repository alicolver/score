import React from "react";
import Image from "next/image";
import {getCrestUrlForCountry, getFlagUrlForCountry} from "@/app/util/flag";

interface CrestProps {
    country: string
}

export default function Crest(props: CrestProps): React.JSX.Element {
    return (
        <div className="flex flex-col items-center">
            <Image
                src={getCrestUrlForCountry(props.country)}
                alt={props.country}
                width={60}
                height={50}
                unoptimized={true}
            />
            <span className="text-center text-xs">
                {props.country.charAt(0).toUpperCase() + props.country.slice(1)}
            </span>
        </div>
    )
}