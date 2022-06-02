export interface IUserType {
    id: number,
    name: string,
    country: string,
    city: string
}

export interface IPostType {
    id: number,
    user_id: number,
    header: string,
    txt: string,
    dt: string
}
