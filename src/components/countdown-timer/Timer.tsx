import React, { useEffect, useState } from "react";
import { CountdownTimerProps } from "./TimerProps";

const tileStyle: React.CSSProperties = {
    display: 'flex',
    height: '30px',
    backgroundColor: 'transparent',
    justifyItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    position: 'relative',
    fontSize: '20px'
}

const Timer = (props: CountdownTimerProps) => {

    const [timeLeft, setTimeLeft] = useState(props.startTimer > 3600 ? 3600 : props.startTimer)
    const timerDisplayProperties: React.CSSProperties = {
        display: 'flex',
        flex: 1,
        width: '100px',
        background:'transparent'
    }
    if (props.border && props.border.apply === true) {
        timerDisplayProperties.borderWidth = props.border.width
        timerDisplayProperties.borderColor = props.border.color
        timerDisplayProperties.borderStyle = 'solid'
    }
    useEffect(() => {
        if (timeLeft > 0) {
            const timeOutFunction = setTimeout(() => {
                setTimeLeft((timeLeft: number) => {
                    return timeLeft - 1
                })
            }, 1000);
            return () => { clearTimeout(timeOutFunction) }
        }
        if (timeLeft == 0) {
            props.onTimeout()
        }
    }, [timeLeft])

    return (<div style={timerDisplayProperties} >
        <div style={{ ...tileStyle, flex: 4 }}><span>{Math.floor(timeLeft / 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}</span></div>
        <div style={{ ...tileStyle, flex: 1 }}><span style={{ marginLeft: 5, marginRight: 5 }}>:</span></div>
        <div style={{ ...tileStyle, flex: 4 }}><span>{(timeLeft % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}</span></div>
    </div>)
}

export { Timer as CountdownTimer }