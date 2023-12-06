import { useState } from "react";


export default function TimerChallenge({title , targetTime}) {
    const [timerStarted , setTimerStarted] = useState(false);
    const [timerExpired , setTimerExpired] = useState(false);

    function handleStart() {
        console.log(targetTime);
        setTimerStarted(true);
        // we can save the timer and access that from other function to stop the timer once some other event occurs
        

       const timer =  setTimeout(() => {
            setTimerExpired(true);
        } , targetTime * 1000);
       
    }
    function handleStop () {
        clearTimer()

    }
    return <section className="challenge">
        <h2>{title}</h2>
        {timerExpired ? 'You lost!!' : ''}
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={handleStart}>
                { timerStarted ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
            {timerStarted ? 'Time is running ' : 'Timer inactive'}

        </p>


    </section>
}