// class
export default interface Store<T> {

    // methods
    add(item: T): void

   // update(item: T): void

    remove(predicate: (item: T) => boolean): void

    removeAll(predicate: (item: T) => boolean): void

    find(predicate: (item: T) => boolean): T | undefined

    findAll(predicate: (item: T) => boolean): T[]
}