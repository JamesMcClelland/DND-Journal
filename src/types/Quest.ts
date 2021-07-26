import {QuestStatus} from "./QuestStatus";

export interface Quest {
    id?: number;
    name: string;
    status?: QuestStatus;
}