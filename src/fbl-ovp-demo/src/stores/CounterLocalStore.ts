// imports
import { Store, StoreMode} from '@/modules/fbl/ovp-store'
import Counter from './Counter'

// class
class CounterLocalStore extends Store<Counter> {
    
    // constructors
    constructor() { super('counter-local-store', Counter.prototype, StoreMode.Local) }
}

// singleton
const counterLocalStore = new CounterLocalStore()

// export
export default counterLocalStore