import { useEffect, useState } from "react";

export default function Time(){
    const [time, setTime] = useState(new Date());

        useEffect(() => {
            const timerid = setInterval(() => {
                setTime(new Date());
            }, 1000)
            return() => {
                clearInterval(timerid);
            }
        }, [])

    return(
        <p>{time.toLocaleTimeString()}</p>
    )
}