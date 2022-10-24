export interface INutri {
    status: string,
    message: string,
    data: {
        id: number,
        user_id: number,
        N: number,
        K: number,
        P: number,
        Ca: number,
        Mg: number,
        S: number,
        user: {
            id: number,
            name: string,
        }
    }
}

export interface INutriField {
    id: number,
    user_id: number,
    N: number,
    K: number,
    P: number,
    Ca: number,
    Mg: number,
    S: number,
    user: {
        id: number,
        name: string,
    }
}