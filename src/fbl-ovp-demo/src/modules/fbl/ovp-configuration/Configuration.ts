// import
import merge from "lodash.merge"

// class
export default class Configuration {

    // fields
    private configData: unknown = null


    // methods
    async initialize(): Promise<void> {

        // contracts
        if (this.configData !== null) return

        // baseConfig
        const baseConfigUrl = "./app.config.json"
        const baseConfig = await this.fetchConfig(baseConfigUrl)

        // envConfig
        const envConfigUrl = `./app.${import.meta.env.MODE}.config.json`
        let envConfig = {}
        if (import.meta.env.MODE) {
            envConfig = await this.fetchConfig(envConfigUrl)
        }

        // configData
        this.configData = merge({}, baseConfig, envConfig)
    }

    bind<T>(path: string): T {

        // contracts
        if (this.configData === null) throw new Error('[fbl-ovp-configuration] 尚未初始化，請先呼叫 initialize')

        // targetData
        const targetData = this.get(this.configData, path)
        if (targetData === undefined) throw new Error(`[fbl-ovp-configuration] 找不到路徑：${path}`)

        // return
        return targetData as T
    }

    private async fetchConfig(configUrl: string): Promise<any> {

        // execute
        try {

            // fetch
            const response = await fetch(configUrl, { cache: 'no-store' })
            if (!response.ok) throw new Error(`HTTP ${response.status}`)

            // return
            return await response.json()

        } catch (error) {

            // log
            console.warn(`[fbl-ovp-configuration] Failed to load configuration: ${configUrl}`, error);

            // return
            return {}
        }
    }

    private get(obj: any, path: string): any {
        return path.split('.').reduce((o, key) => (o ? o[key] : undefined), obj)
    }
}