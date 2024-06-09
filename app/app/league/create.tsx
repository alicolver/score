'use client'

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
import React, {useState} from "react";
import {LeagueApi} from "@/client";
import {PressEvent} from "@react-types/shared";
import {getConfigWithAuthHeaderClient} from "@/app/api/client-config-client-side";

export default function CreateLeague(): React.JSX.Element {

    const {isOpen, onOpen, onOpenChange} = useDisclosure()

    const [didFail, setDidFail] = useState(false)
    const [leagueName, setLeagueName] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    async function join(): Promise<boolean> {
        setIsLoading(true)
        try {
            const leagueApi = new LeagueApi(await getConfigWithAuthHeaderClient())
            await leagueApi.createLeague({
                createLeagueRequest: {
                    leagueName: leagueName
                }
            })
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
                    onClose()
                }
            })
        };
    }

    return (
        <div className="w-full justify-around pt-2">
            <Button className={BUTTON_CLASS} onPress={onOpen} style={{width: "100%", marginBottom: "5px"}}>
                Create a League
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
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
                                    autoFocus
                                    label="LeagueId"
                                    style={{fontSize: "18px"}}
                                    onChange={(event) => {
                                        setDidFail(false)
                                        setLeagueName(event.target.value)
                                    }}
                                    isInvalid={didFail}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <div className="flex w-full justify-around">
                                    <div className="flex w-1/2 justify-around">
                                        <Button className="flex-row" color="danger" variant="flat" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button className={BUTTON_CLASS + " flex-row"}
                                                onPress={getOnPress(onClose)}
                                                isLoading={isLoading}
                                        >
                                            Create
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