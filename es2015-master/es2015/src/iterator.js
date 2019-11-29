export class Iterable {
    constructor(iteratorFactory) {
    }
}

export class Iterator {
    constructor(onNext) {
        {
            this.next = () => {
                let value = onNext();
                return new IteratorResult(value, !value);
            }
        }
    }
}

export class IteratorResult {
    constructor(value, done) {
        {
            this.value = value, 
            this.done = done
        }
    }
}

/**
 * Rendre les propriétés d'un objet iterables
 * S'aider de la fonction Object.keys
 */
export function toIterable(obj) {
    obj[Symbol.iterator] = () => {
        let keys = Object.keys(obj);
        let i = -1;
        return {
            next() {
                i++;
                return{              
                    value: { 'key' : keys[i], 'value': obj[keys[i]] },
                    done: i === keys.length
                }
            }
        } 
    }
}