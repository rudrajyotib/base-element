interface TimerProps {

    timerName: string,
    startTimer: number,
    onTimeout : ()=>void,
    border : {apply : boolean, color: 'red'|'black'|'blue', width : 'thin' | 'thick'}

}

export {TimerProps as CountdownTimerProps}