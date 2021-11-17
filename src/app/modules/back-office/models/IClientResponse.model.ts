    export interface Client {
        createdAt: Date;
        updatedAt: Date;
        createdBy: string;
        id: number;
        organisation: string;
        tradeName: string;
        address: string;
        sector: string;
        user: string;
        firstContactUser: string;
        firstContactEmail: string;
        firstContactPhone: string;
        note: string;
        active: boolean;
    }

    export interface ClientResponse {
        totalItems: number;
        totalPages: number;
        Clients: Client[];
        currentPage: number;
    }

