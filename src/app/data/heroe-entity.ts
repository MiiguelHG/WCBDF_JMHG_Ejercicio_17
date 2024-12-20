export interface Heroe {
    status: number,
    message: string,
    data: {
        id?: number,
        nombre: string,
        poder: string,
        universo: string,
        debilidad: string,
        urlImagen: string
    },
    links: [
        {
            rel: string,
            href: string
        }
    ]
}