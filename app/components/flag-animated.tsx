import React from "react"
import Image from "next/image"
import styles from "@/app/styles/Flag.module.css"

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
                src={`https://predictaball-teamflagsbucketb6ca46de-2uk8faboxd6r.s3.eu-west-2.amazonaws.com/${props.country}.svg`}
                width={0}
                height={0}
                className={styles.flag}
            />
        </div>
    )
}