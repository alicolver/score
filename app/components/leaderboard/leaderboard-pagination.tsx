'use client'

import {LeaderboardInner} from "@/client"
import LeaderboardEntry from "./leaderboard-entry"
import React, {useEffect, useState} from "react"
import {Pagination} from "@nextui-org/react";
import {BUTTON_CLASS} from "@/app/util/css-classes";

interface LeaderboardPaginationProps {
    leaderboardInners: LeaderboardInner[]
    userId: string | undefined
}

export default function LeaderboardPagination(props: LeaderboardPaginationProps): React.JSX.Element {

    const [currentPage, setCurrentPage] = useState(0)
    const windowsSize = useWindowSize()
    const itemsPerPage = windowsSize.height !== undefined ? windowsSize.height / 100 : 5;

    const getPaginatedLeaderboard = (leaderboard: any[]) => {
        const startIndex = currentPage * itemsPerPage;
        return leaderboard.slice(startIndex, startIndex + itemsPerPage);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page - 1);
    };

    const totalPages = Math.ceil(props.leaderboardInners.length / itemsPerPage);

    return <>
        {getPaginatedLeaderboard(props.leaderboardInners).map((entry, index) => (
            <LeaderboardEntry
                key={index}
                entry={entry}
                isUser={entry.user.userId === props.userId}
            />
        ))}
        {totalPages > 1 &&
            <Pagination showControls radius="full" total={totalPages} initialPage={1} onChange={handlePageChange}
                        classNames={{
                            cursor: BUTTON_CLASS,
                            item: "bg-transparent text-white hover:text-black"
                        }}
            />}
    </>
}

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<{
        width: undefined | number,
        height: undefined | number
    }>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}