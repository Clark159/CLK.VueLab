
// class
class Configuration {

    // fields
    private configData: unknown = null


    // methods
    async initialize(configUrl: string): Promise<void> {

        // contracts
        if (this.configData !== null) return

        // read
        const response = await fetch(configUrl, { cache: 'no-store' })
        if (!response.ok) throw new Error(`[fbl-ovp-configuration] 無法載入 ${configUrl}`)

        // configData
        this.configData = await response.json()
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

    private get(obj: any, path: string): any {
        return path.split('.').reduce((o, key) => (o ? o[key] : undefined), obj)
    }
}

// singleton
const configuration = new Configuration()
async function createConfiguration(configUrl: string = './app.config.json'): Promise<Configuration> {

    // initialize
    await configuration.initialize(configUrl)

    // return
    return configuration
}

// export
export default configuration
export { createConfiguration }