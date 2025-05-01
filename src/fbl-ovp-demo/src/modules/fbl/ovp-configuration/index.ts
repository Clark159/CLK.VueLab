// import
import Configuration from "./Configuration"

// singleton
const configuration = new Configuration()
async function createConfiguration(): Promise<Configuration> {

    // initialize
    await configuration.initialize()

    // return
    return configuration
}

// export
export default configuration
export { createConfiguration }