class Iterator {
    constructor(items) {
        this.items = items;
        this.currentPosition = 0;
    }

    firstElem() {
        this.currentPosition = 0;
        return this.next();
    }

    next() {
        return this.items[this.currentPosition++];
    }

    hasNext() {
        return this.currentPosition <= this.items.length;
    }
}

const items = ['Hello', 'From', 'Iterator'];
let iterator = new Iterator(items);

for (let item = iterator.firstElem(); iterator.hasNext(); item = iterator.next()) {
    console.log(item);
}