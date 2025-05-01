// imports
import { Store, StoreMode} from '@/modules/fbl/ovp-store'
import Counter from './Counter'

// class
class CounterMemoryStore extends Store<Counter> {
    
    // constructors
    constructor() { super('counter-memory-store', Counter.prototype, StoreMode.Local) }
}

// singleton
const counterMemoryStore = new CounterMemoryStore()

// export
export default counterMemoryStore