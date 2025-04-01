import { IconRotateClockwise2 } from "@tabler/icons-react";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <IconRotateClockwise2 className="text-zinc-600 animate-spin" size={100} />
        </div>
    )
}   