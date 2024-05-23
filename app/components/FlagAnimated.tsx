import React from "react";

interface FlagAnimatedProps {
    index: number,
    invert: boolean
}

export default function FlagAnimated(props: FlagAnimatedProps): React.JSX.Element {
    const animationStyle = {
        animationDelay: `${props.index * 1500}ms`,
        animationDirection: props.invert ? "reverse" : "normal"
    };

    return (
        <div className={'z-0 absolute animate-slideup'} style={animationStyle}>
            <img
                alt="flag of scotland"
                src="https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg"
                width="50px"
                height="30px"
            />
        </div>
    )
}