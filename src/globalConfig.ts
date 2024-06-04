type TConfig = {
    apiAuthServiceAddress: string,
    baseurl: string
}

declare global {
    interface Window {
        SERVER_ENV: any
    }
}

export const GLOBAL_CONFIG: TConfig = {
    apiAuthServiceAddress: window.SERVER_ENV?.VITE_APP_API_AUTH_SERVICE_ADDRESS || import.meta.env.VITE_APP_API_AUTH_SERVICE_ADDRESS || 'http://85.175.194.251:50443/api/auth-service/',
    baseurl: window.SERVER_ENV?.VITE_APP_BASE_URL || import.meta.env.VITE_APP_BASE_URL || '',
}
