import React from "react"
import Image from "next/image"
import styles from "@/app/styles/Flag.module.css"
import {getFlagUrlForCountry} from "@/app/util/flag";

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
        <div className={'z-0 fixed lg:animate-slideslow animate-slide overflow-hidden invisible'} style={animationStyle}>
            <Image
                alt={`flag of ${props.country}`}
                src={getFlagUrlForCountry(props.country)}
                width={0}
                height={0}
                className={styles.flag}
            />
        </div>
    )
}