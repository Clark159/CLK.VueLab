// import
import { defineStore as definePiniaStore } from 'pinia'
import { ref, type Ref } from 'vue'
import type Store from './Store'

// class
export default function defineStore<T>(storeId: string) {
    return definePiniaStore(storeId, () => {

        // fields
        const itemList: Ref<T[]> = ref([])


        // methods
        function add(item: T): void {
            itemList.value.push(item)
        }

        function update(item: T, predicate: (item: T) => boolean): void {
            const index = itemList.value.findIndex(predicate)
            if (index !== -1) itemList.value[index] = item
        }

        function remove(predicate: (item: T) => boolean): void {
            const index = itemList.value.findIndex(predicate)
            if (index !== -1) itemList.value.splice(index, 1)
        }

        function removeAll(predicate: (item: T) => boolean): void {
            itemList.value = itemList.value.filter(item => !predicate(item))
        }

        function find(predicate: (item: T) => boolean): T | undefined {
            return itemList.value.find(predicate)
        }

        function findAll(predicate: (item: T) => boolean): T[] {
            return itemList.value.filter(predicate)
        }


        // return
        return {
            add,
            update,
            remove,
            removeAll,
            find,
            findAll,
        } as Store<T>
    })()
}