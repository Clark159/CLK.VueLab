// import
import { ref, type Ref } from 'vue'
import { defineStore as definePiniaStore } from 'pinia'
import StoreMode from './StoreMode'

// singleton
const storeIdList = new Set<string>()

// class
export default function defineStore<T>(storeId: string, prototype: object, storeMode: StoreMode = StoreMode.Local) {

    // register
    if (storeIdList.has(storeId)) throw new Error(`[fbl-ovp-store] storeId重複註冊：${storeId}`)
    storeIdList.add(storeId)

    // persist
    let persist: boolean | { storage: Storage }
    switch (storeMode) {
        case StoreMode.Memory:
            persist = false
            break
        case StoreMode.Session:
            persist = { storage: sessionStorage }
            break
        case StoreMode.Local:
        default:
            persist = { storage: localStorage }
            break
    }

    // create
    return definePiniaStore(storeId, () => {

        // felds
        const itemList: Ref<T[]> = ref([])

        
        // methods
        function add(item: T): void {
            itemList.value.push(item)
        }

        function update(item: T, predicate?: (item: T) => boolean): void {

            // require
            if (itemList.value.length === 0) return

            // find
            const index = predicate
                ? itemList.value.findIndex(predicate)
                : 0

            // update
            if (index !== -1 && index < itemList.value.length) {
                itemList.value[index] = item
            }
        }

        function remove(predicate?: (item: T) => boolean): void {

            // require
            if (itemList.value.length === 0) return
            
            // index
            const index = predicate
                ? itemList.value.findIndex(predicate)
                : 0

            // remove
            if (index !== -1 && index < itemList.value.length) {
                itemList.value.splice(index, 1)
            }
        }

        function removeAll(predicate?: (item: T) => boolean): void {

            // require
            if (itemList.value.length === 0) return

            // remove
            itemList.value = predicate
                ? itemList.value.filter(item => !predicate(item))
                : []
        }

        function find(predicate?: (item: T) => boolean): T | undefined {

            // require
            if (itemList.value.length === 0) return undefined

            // find
            const result = predicate
                ? itemList.value.find(predicate)
                : itemList.value[0]

            // prototype
            return result && prototype
                ? Object.setPrototypeOf(result, prototype)
                : result
        }

        function findAll(predicate?: (item: T) => boolean): T[] {

            // find
            const result = predicate
                ? itemList.value.filter(predicate)
                : [...itemList.value]

            // prototype
            return prototype
                ? result.map(item => Object.setPrototypeOf(item, prototype))
                : result
        }


        // return
        return {
            itemList,
            add,
            update,
            remove,
            removeAll,
            find,
            findAll,
        }
    }, {
        persist: persist
    })
}