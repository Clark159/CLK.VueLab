// import
import configuration from '@/modules/fbl/ovp-configuration'
import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import type HttpClientOptions from './HttpClientOptions'

// class
export default class HttpClient {

    // fields
    private client!: AxiosInstance

    private options!: HttpClientOptions


    // constructors
    constructor() {

        // options
        this.options = configuration.bind<HttpClientOptions>('fbl.network.http.httpClient')
        if (!this.options) throw new Error('options is null')

        // client
        this.client = axios.create({
            baseURL: this.options.baseUrl,
            timeout: this.options.timeout ?? 10000,
            headers: this.options.headers ?? {}
        })
    }


    // methods
    async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.client.get<T>(url, config)
    }

    async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.client.post<T>(url, data, config)
    }

    async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.client.put<T>(url, data, config)
    }

    async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.client.delete<T>(url, config)
    }
}
