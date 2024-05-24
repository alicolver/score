import React from "react";
import Image from "next/image";

interface FlagAnimatedProps {
    index: number,
    invert: boolean,
    bottom: string,
    country: string
}

export default function FlagAnimated(props: FlagAnimatedProps): React.JSX.Element {

    const animationStyle = {
        animationDelay: `${props.index * 1000}ms`,
        animationDirection: props.invert ? "reverse" : "normal",
        bottom: props.bottom
    };

    return (
        <div className={'z-0 fixed animate-slide overflow-hidden invisible'} style={animationStyle}>
            <Image
                alt={`flag of ${props.country}`}
                src={`https://predictaball-teamflagsbucketb6ca46de-2uk8faboxd6r.s3.eu-west-2.amazonaws.com/${props.country}.svg`}
                width={50}
                height={30}
            />
        </div>
    )
}