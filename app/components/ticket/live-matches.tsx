import React, {Suspense} from "react";
import Tickets from "@/app/components/ticket/tickets";
import EmptyTicket from "@/app/components/ticket/empty-ticket";
import {ListMatchesFilterTypeEnum} from "@/client";

export default function LiveMatches(): React.JSX.Element {
    return (
        <div className="flex flex-wrap w-full content-center justify-center">
            <Suspense fallback={<></>}>
                <Tickets title={"Live Matches"} showInfoButton={false} filterType={ListMatchesFilterTypeEnum.Live}/>
            </Suspense>
        </div>
    )
}