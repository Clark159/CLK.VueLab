
// class
class Configuration {

  // fields
  private configData: unknown = null


  // methods
  async bind<T>(path: string): Promise<T> {

    // configData
    if (!this.configData) {
      const response = await fetch('/app.config.json')
      if (!response.ok) throw new Error('[fbl-ovp-configuration] 無法載入 /app.config.json')
      this.configData = await response.json()
    }

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

// export
export { configuration }