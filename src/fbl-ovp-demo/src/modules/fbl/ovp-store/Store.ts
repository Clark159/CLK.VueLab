// import
import defineStore from './PiniaStore'
import StoreMode from './StoreMode'

// class
export default class Store<T> {

    // fields
    private readonly store: ReturnType<ReturnType<typeof defineStore<T>>>


    // constructors
    constructor(storeId: string, prototype: object, storeMode: StoreMode = StoreMode.Local) {
        
        // Store
        this.store = defineStore<T>(storeId, prototype, storeMode)()
    }


    // methods
    add(item: T): void {
        this.store.add(item)
    }

    update(item: T, predicate?: (item: T) => boolean): void {
        this.store.update(item, predicate)
    }

    remove(predicate?: (item: T) => boolean): void {
        this.store.remove(predicate)
    }

    removeAll(predicate?: (item: T) => boolean): void {
        this.store.removeAll(predicate)
    }

    find(predicate?: (item: T) => boolean): T | undefined {
        return this.store.find(predicate)
    }

    findAll(predicate?: (item: T) => boolean): T[] {
        return this.store.findAll(predicate)
    }
}