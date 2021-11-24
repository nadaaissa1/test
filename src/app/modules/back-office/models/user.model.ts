import { RoleModel } from "./role.model";

export class UserModel {

    id: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    name: string;
    account: string;
    site: string;
    employeeID: string;
    description: string;
    emailid: string;
    phone: string;
    mobile: string;
    CostPerHour: number;
    jobTitle: string;
    domain_Name: string;
    loginName: string;
    userpassword: string;
    isVIPUser: Boolean;
    landline: string;
    role: RoleModel[];
    active: Boolean; 
  }