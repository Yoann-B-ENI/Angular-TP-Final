export interface ArtApiResponse<T> {
    preference?: any, 
    pagination?: any, 
    data: T[], 
    info?: any, 
    config?: any
}
