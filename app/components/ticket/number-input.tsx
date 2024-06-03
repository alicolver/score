import React from "react";
import {Input, Button} from "@nextui-org/react";

export default function NumberInput(): React.JSX.Element {
    return (<div className="flex p-2">
        {/*<Button isIconOnly className="rounded-3xl mr-3">*/}
        {/*    <svg xmlns={"http://www.w3.org/2000/svg"} height="20px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">*/}
        {/*        <path d="M200-440v-80h560v80H200Z"/>*/}
        {/*    </svg>*/}
        {/*</Button>*/}
        <Input variant="bordered" className="w-10"/>
        {/*<Button isIconOnly className="rounded-3xl ml-3">*/}
        {/*    <svg xmlns={"http://www.w3.org/2000/svg"} height="20px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">*/}
        {/*        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>*/}
        {/*    </svg>*/}
        {/*</Button>*/}
    </div>)
}