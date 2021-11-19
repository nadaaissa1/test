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
        note?: any;
        active: boolean;
    }

    export interface Contract {
        createdAt: Date;
        updatedAt: Date;
        createdBy: string;
        id: number;
        title: string;
        description: string;
        commercial: string;
        type: string;
        attachment: any[];
        client: Client;
        startDate: Date;
        endDate: Date;
        note: string;
        active: boolean;
    }

    export interface ContratResponse {
        totalItems: number;
        totalPages: number;
        currentPage: number;
        Contracts: Contract[];
    }
