import React, {Suspense} from "react";
import Tickets from "@/app/components/ticket/tickets";
import EmptyTicket from "@/app/components/ticket/empty-ticket";

export default function MatchesToPredict(): React.JSX.Element {
    return (
        <div className="items-center">
            <p className="w-full text-center text-white mt-3">Matches To Predict</p>
            <Suspense fallback={<EmptyTicket />}>
                <Tickets/>
            </Suspense>
        </div>
    )
}