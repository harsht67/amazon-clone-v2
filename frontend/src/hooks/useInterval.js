import { useEffect, useRef } from 'react'

function useInterval(callback, delay) {
    const savedCallback = useRef()

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {

        function move() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(move, delay);
            return () => clearInterval(id);
        }
        
    }, [delay])
}

export default useInterval