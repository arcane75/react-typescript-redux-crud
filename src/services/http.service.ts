import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosConfig: AxiosRequestConfig = {
    baseURL: "http://localhost:5000/",
    timeout: 15000,
};

const instance: AxiosInstance = axios.create(axiosConfig);

class Request {
    async get(url: string): Promise<AxiosResponse> {
        return instance.get(url).then((res) => res.data);
    }
    async post(url: string, body: any): Promise<AxiosResponse> {
        return instance.post(url, body).then((res) => res.data);
    }
    async put(url: string, body: any): Promise<AxiosResponse> {
        return instance.patch(url, body).then((res) => res.data);
    }
    async delete(url: string): Promise<AxiosResponse> {
        return instance.delete(url).then((res) => res.data);
    }
}

const httpReq = new Request();

export default httpReq;