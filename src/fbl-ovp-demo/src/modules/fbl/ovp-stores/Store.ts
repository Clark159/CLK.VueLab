// import { defineStore } from 'pinia'
// import { ref, type Ref } from 'vue'
// import { StoreMode } from './StoreMode'

// type StoreState<T> = {
//     _itemList: Ref<T[]>
// }

// type StoreActions<T> = {
//     create(item: T): void
//     update(predicate: (item: T) => boolean, updater: (item: T) => T): void
//     remove(predicate: (item: T) => boolean): void
//     query(predicate: (item: T) => boolean): T[]
//     find(predicate: (item: T) => boolean): T | undefined
// }

// export class Store<T> {
//     private static StoreList = new Map<string, ReturnType<typeof defineStore>>()

//     constructor(
//         private storeName: string,
//         private storage: StoreMode = StoreMode.Memory
//     ) {
//         let store = Store.StoreList.get(this.storeName)

//         if (!store) {
//             store = defineStore<string, StoreState<T>, {}, StoreActions<T>>(this.storeName, () => {
//                 const _itemList: Ref<T[]> = ref([])

//                 function create(item: T) {
//                     _itemList.value.push(item)
//                 }

//                 function update(predicate: (item: T) => boolean, updater: (item: T) => T) {
//                     _itemList.value = _itemList.value.map(item =>
//                         predicate(item) ? updater(item) : item
//                     )
//                 }

//                 function remove(predicate: (item: T) => boolean) {
//                     _itemList.value = _itemList.value.filter(item => !predicate(item))
//                 }

//                 function query(predicate: (item: T) => boolean): T[] {
//                     return _itemList.value.filter(predicate)
//                 }

//                 function find(predicate: (item: T) => boolean): T | undefined {
//                     return _itemList.value.find(predicate)
//                 }

//                 return { _itemList, create, update, remove, query, find }
//             })

//             if (this.storage !== StoreMode.Memory) {
//                 store.persist = {
//                     enabled: true,
//                     strategies: [
//                         {
//                             key: this.storeName,
//                             storage: this.storage === StoreMode.Local ? localStorage : sessionStorage,
//                         },
//                     ],
//                 }
//             }

//             Store.StoreList.set(this.storeName, store)
//         }

//         const sotre = store()

//         // 綁定方法
//         this.create = sotre.create.bind(sotre)
//         this.update = sotre.update.bind(sotre)
//         this.remove = sotre.remove.bind(sotre)
//         this.query = sotre.query.bind(sotre)
//         this.find = sotre.find.bind(sotre)
//     }

//     // TypeScript method declarations（提供 IntelliSense）
//     create(item: T): void { }
//     update(predicate: (item: T) => boolean, updater: (item: T) => T): void { }
//     remove(predicate: (item: T) => boolean): void { }
//     query(predicate: (item: T) => boolean): T[] { return [] }
//     find(predicate: (item: T) => boolean): T | undefined { return undefined }
// }
