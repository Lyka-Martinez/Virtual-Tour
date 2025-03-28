import { AccordionButton } from "./Buttons";

import { Room } from "../types";
import facilities from "../data/facilities.json";

type AccordionProps = {
    onRoomSelect: (room: Room) => void;
};

export function Accordion({ onRoomSelect }: AccordionProps) {
    return (
        <>
            {facilities.map((facility, index) => (
                <div
                    key={index}
                    className="collapse collapse-arrow join-item bg-base-100 border-base-300 border"
                >
                    <input type="radio" name="accordion-group" />
                    <div className="collapse-title font-semibold text-brnd-secondary">
                        {facility.title}
                    </div>

                    <div className="collapse-content flex flex-col gap-3">
                        {facility.rooms.map((room, roomIndex) => (
                            <AccordionButton
                                key={roomIndex}
                                text={room.name}
                                onClick={() => onRoomSelect(room)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}