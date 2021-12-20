export interface Role {
    id: number;
    name: string;
}

export interface Content {
    id: number;
    first_Name: string;
    middle_Name?: any;
    last_Name: string;
    name: string;
    account: string;
    site: string;
    employeeID: string;
    description?: any;
    emailid: string;
    phone: string;
    mobile: string;
    jobTitle: string;
    domain_Name: string;
    loginName: string;
    userpassword: string;
    isVIPUser: boolean;
    landline?: any;
    roles: Role[];
    costPerHour: number;
    active: Boolean;
}

export interface Sort {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
}

export interface Pageable {
    sort: Sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
    paged: boolean;
}

export interface Sort2 {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
}

export interface UserResponse {
    content: Content[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: Sort2;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}