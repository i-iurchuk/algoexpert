class EventTarget {
    constructor() {
        this.events = {};
    }

    addEventListener(name, callback) {
        if(!this.events.hasOwnProperty(name)){
            this.events[name] = new Set([callback]);
        } else {
            this.events[name].add(callback);
        }
    }
  
    removeEventListener(name, callback) {
        this.events[name]?.delete(callback);
    }
  
    dispatchEvent(name) {
        this.events[name]?.forEach(callback => {
            callback();
        });
    }
}

const target = new EventTarget();

const logTest = () => console.log("___TEST")
const logHello = () => console.log("___HELLO")

target.addEventListener('test', logTest);
target.addEventListener('hello', logHello);

target.dispatchEvent('test');
target.dispatchEvent('hello');

target.removeEventListener('test', logHello2 )

target.dispatchEvent('test');
target.dispatchEvent('hello');