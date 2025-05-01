// imports
import Store from '@/modules/fbl/ovp-store'
import Counter from './Counter'

// class
class CounterMemoryStore extends Store<Counter> {
    
    // constructors
    constructor() {
        super('counter-store')
    }

    // methods
    increment(): void {

        // find
        let counter = this.find()
        if (!counter) {
            
            // create
            counter = new Counter()
            this.add(counter)
        }

        // update
        counter.value = counter.value + 1
        this.update(counter)
    }
}

// singleton
const counterMemoryStore = new CounterMemoryStore()

// export
export default counterMemoryStore