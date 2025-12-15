"use client";

import environment from "~/shared/environment";

import { useRef } from "react";
import { PopupButton } from "react-calendly";

export default function Home() {
    const parentContainerReference = useRef<HTMLDivElement>(null);

    return (
        <div className="box-border p-4" ref={parentContainerReference}>
            <PopupButton
                url={environment.NEXT_PUBLIC_BOOKING_URL!}
                className="btn btn-primary rounded-lg"
                rootElement={parentContainerReference.current!}
                text="Schedule Booking"
            />
        </div>
    );
}
