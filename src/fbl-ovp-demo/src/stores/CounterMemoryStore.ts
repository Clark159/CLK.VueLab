// imports
import Store from '@/modules/fbl/ovp-store'
import Counter from './Counter'

// class
class CounterMemoryStore extends Store<Counter> {
    
    // constructors
    constructor() {
        super('counter-memory-store')
    }

    // methods
    increment(): void {

        // find
        let counter = this.find()
        if (!counter) {
            
            // create
            counter = new Counter()

            // add
            this.add(counter)
        }

        // increment
        counter.value = counter.value + 1

        // update
        this.update(counter)
    }
}

// singleton
const counterMemoryStore = new CounterMemoryStore()

// export
export default counterMemoryStore