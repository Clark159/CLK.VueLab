// stores/user.ts
import { defineStore } from 'pinia'

export interface User {
    id: string
    count: number
}

export const useUserStore = defineStore('user', {

    state: () => ({
        users: [] as User[]
    }),


    actions: {
        add(user: User) {
            this.users.push(user)
        },

        updateUser(user: User) {
            const index = this.users.findIndex(u => u.id === user.id)
            if (index === -1) {
                throw new Error(`User with id ${user.id} not found.`)
            }
            this.users[index] = user
        },

        Remove(id: string) {
            this.users = this.users.filter(user => user.id !== id)
        }
    }
})


