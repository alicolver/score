import {User} from "@/client";

export function generateHistoryPageLinkForUser(user: User) {
    return `/app/user/${user.userId}/history?first=${user.firstName.replace(/\s/g,'')}&last=${user.familyName.replace(/\s/g,'')}`
}