export interface ReservaDTO {
    id?: number;
    nome?: string;
    celular: string;
    email: string;
    cpf: string;
    dataEntrada: string;
    dataSaida: string;
    quarto: QuartoDTO;
}

export interface QuartoDTO {
    descricao: string;
    id: number;
    numero: number;
    preco: number;
    quantidade_lugares: number;
}

export interface Pageable<T> {
    content: T[];
    pageable: {
        sort: {
            sorted: boolean,
            unsorted: boolean,
            empty: boolean
        },
        offset: number,
        pageNumber: number,
        pageSize: number,
        paged: boolean,
        unpaged: boolean
    };
    totalElements: number;
    totalPages: number;
    last: true;
    size: number;
    number: number;
    sort: {
        sorted: boolean,
        unsorted: boolean,
        empty: boolean
    };
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}
