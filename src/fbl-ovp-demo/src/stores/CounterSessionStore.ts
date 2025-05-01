// imports
import { Store, StoreMode} from '@/modules/fbl/ovp-store'
import Counter from './Counter'

// class
class CounterSessionStore extends Store<Counter> {
    
    // constructors
    constructor() { super('counter-session-store', Counter.prototype, StoreMode.Session) }
}

// singleton
const counterSessionStore = new CounterSessionStore()

// export
export default counterSessionStore