// HOC function return function
function debounce(callback, delay, immediate = false) {
    let timerID;

    return function(...args) {
        clearTimeout(timerID);

        const shouldCallImmediately = timerID == null && immediate;

        if(shouldCallImmediately) {
            callback.apply(this, args);
        } 

        timerID = setTimeout(() => {
            if(!immediate) {
                callback.apply(this, args);
            }
            timerID = null;
        }, delay);
    }
}

let a = debounce(() => {
    console.log("IN callback", this)
}, 1000);

a();