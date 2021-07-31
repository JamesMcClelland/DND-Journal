import {QuestStatus} from "./QuestStatus";
import {QuestType} from "./QuestType";

export interface Quest {
    id?: number;
    name: string;
    description: string;
    quest_status: QuestStatus;
    quest_type: QuestType;
}