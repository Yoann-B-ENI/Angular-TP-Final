export interface AuthApiResponse<T> {
    code: string, 
    message: string, 
    data: T
}
