// imports
import Store from '@/modules/fbl/ovp-store'
import Counter from './Counter'

// class
class CounterMemoryStore extends Store<Counter> {
    
    // constructors
    constructor() {
        super('counter-memory-store', Counter.prototype )
    }
}

// singleton
const counterMemoryStore = new CounterMemoryStore()

// export
export default counterMemoryStore