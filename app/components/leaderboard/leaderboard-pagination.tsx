'use client'

import {LeaderboardInner} from "@/client"
import LeaderboardEntry from "./leaderboard-entry"
import React, {useState} from "react"
import {Pagination} from "@nextui-org/react";
import {BUTTON_CLASS} from "@/app/util/css-classes";

interface LeaderboardPaginationProps {
    leaderboardInners: LeaderboardInner[]
    userId: string | undefined
}

export default function LeaderboardPagination(props: LeaderboardPaginationProps): React.JSX.Element {

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

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