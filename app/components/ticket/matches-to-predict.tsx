import React, {Suspense} from "react";
import Tickets from "@/app/components/ticket/tickets";
import EmptyTicket from "@/app/components/ticket/empty-ticket";
import {ListMatchesFilterTypeEnum} from "@/client";

export default function MatchesToPredict(): React.JSX.Element {
    return (
        <div className="items-center">
            <Suspense fallback={<EmptyTicket />}>
                <Tickets title={"Upcoming Matches"} filterType={ListMatchesFilterTypeEnum.Upcoming}/>
            </Suspense>
        </div>
    )
}