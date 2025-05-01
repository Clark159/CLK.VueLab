// import
import { defineStore as definePiniaStore } from 'pinia'
import { ref, type Ref } from 'vue'

// singleton
const storeIdList = new Set<string>()

// class
export default function defineStore<T>(storeId: string) {

    // register
    if (storeIdList.has(storeId)) throw new Error(`[fbl-ovp-store] storeId重複註冊：${storeId}`)
    storeIdList.add(storeId)

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
            return predicate
                ? itemList.value.find(predicate)
                : itemList.value[0]
        }

        function findAll(predicate?: (item: T) => boolean): T[] {

            // find
            return predicate
                ? itemList.value.filter(predicate)
                : [...itemList.value]
        }


        // return
        return {
            add,
            update,
            remove,
            removeAll,
            find,
            findAll,
        }
    })
}