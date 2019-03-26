class SimpleObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(sub => sub !== fn);
    }

    notifyAll(data) {
        this.observers.forEach(obs => obs(data));
    }
}

function foo(data) {
    console.log(data);
}

let obs = new SimpleObserver();
obs.subscribe(foo);
obs.notifyAll('Test');