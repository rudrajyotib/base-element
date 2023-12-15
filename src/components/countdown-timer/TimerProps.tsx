interface TimerProps {

    timerName: string,
    startTimer: number,
    onTimeout : ()=>void

}

export {TimerProps as CountdownTimerProps}