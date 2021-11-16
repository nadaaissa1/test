import { ClientModel } from "app/modules/back-office/models/client.model";
import { ContratAttachmentModel } from "./contratAttachment.model";

export class ContratModel {

    id: number;  
    title: string;
    description: string;
    commercial: string;
    type: string;
    attachment: ContratAttachmentModel[];
    client: ClientModel;
    startDate: Date;
    endDate: Date;
    note: string;
    active: Boolean;
}