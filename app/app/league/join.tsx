'use client'

import React, {useState} from "react";
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure
} from "@nextui-org/react";
import {BUTTON_CLASS} from "@/app/util/css-classes";
import {LeagueApi} from "@/client";
import {getConfigWithAuthHeader} from "@/app/api/client-config";
import {PressEvent} from "@react-types/shared";
import toast from "react-hot-toast";

export default function JoinLeague(): React.JSX.Element {

    const {isOpen, onOpen, onOpenChange} = useDisclosure()

    const [didFail, setDidFail] = useState(false)
    const [leagueId, setLeagueId] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    async function join(): Promise<boolean> {
        setIsLoading(true)
        try {
            const leagueApi = new LeagueApi(await getConfigWithAuthHeader())
            await leagueApi.joinLeague({leagueId: leagueId})
            setDidFail(false)
            setIsLoading(false)
            return true
        } catch (error) {
            setDidFail(true)
            setIsLoading(false)
            return false
        }
    }

    function getOnPress(onClose: () => void) {
        return (_: PressEvent) => {
            join().then(r => {
                if (r) {
                    toast.success("Joined League Successfully")
                    onClose()
                }
            })
        };
    }

    return (
        <div className="w-full justify-around ml-2">
            <Button className={BUTTON_CLASS} style={{width: "100%"}} onPress={onOpen}>
                Join
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                backdrop="blur"
            >
                <ModalContent>
                    {(onClose) => (
                        <div>
                            <ModalHeader>
                                <div className="w-full text-center">
                                    Join a League
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <span>Enter the League Id below:</span>
                                <Input
                                    label="LeagueId"
                                    style={{fontSize: "18px"}}
                                    onChange={(event) => {
                                        setDidFail(false)
                                        setLeagueId(event.target.value)}
                                    }
                                    isInvalid={didFail}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <div className="flex w-full justify-around">
                                    <div className="flex w-1/2 justify-around">
                                        <Button className="flex-row" color="danger" variant="flat" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button className={BUTTON_CLASS + " flex-row"} onPress={getOnPress(onClose)} isLoading={isLoading}>
                                            Join
                                        </Button>
                                    </div>
                                </div>
                            </ModalFooter>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}