// import
import configuration from '@/modules/fbl/ovp-configuration'
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// class
class HttpClient {
  
}

interface HttpClientOptions {
    baseUrl: string
}

// singleton
const httpClient = new HttpClient()

// export
export default httpClient