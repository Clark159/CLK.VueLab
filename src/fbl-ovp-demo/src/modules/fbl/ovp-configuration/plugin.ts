// import
import configuration from "./index"
import Configuration from "./Configuration"

// export
export async function createConfiguration(): Promise<Configuration> {

    // initialize
    await configuration.initialize()

    // return
    return configuration
}