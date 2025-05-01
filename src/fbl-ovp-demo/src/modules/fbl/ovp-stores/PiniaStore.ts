import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import type Store from './Store'

export class PiniaStore<T> {

    //
    public store: Store<T>

    constructor(storeName: string) {
        const useStore = defineStore(storeName, (): Store<T> => {
            const _items: Ref<T[]> = ref([])

            const add = (item: T): void => {
                _items.value.push(item)
            }

            const remove = (predicate: (item: T) => boolean): void => {
                const index = _items.value.findIndex(predicate)
                if (index !== -1) _items.value.splice(index, 1)
            }

            const removeAll = (predicate: (item: T) => boolean): void => {
                _items.value = _items.value.filter(item => !predicate(item))
            }

            const find = (predicate: (item: T) => boolean): T | undefined => {
                return _items.value.find(predicate)
            }

            const findAll = (predicate: (item: T) => boolean): T[] => {
                return _items.value.filter(predicate)
            }

            return {
                add,
                remove,
                removeAll,
                find,
                findAll
            }
        })

        // 設定實例欄位
        this.store = useStore()
    }
}
