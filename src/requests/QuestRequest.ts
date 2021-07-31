import {AppRequest} from "./AppRequest";
import {Quest} from "../types/Quest";

export default class QuestRequest extends AppRequest {
    getQuests() {
        return super.get('/quest/');
    }

    getQuestNotes(quest: Quest) {
        return super.get(`/quest/${quest.id}/notes`)
    }

    createQuest(quest: any) {
        return super.post('/quest/', quest);
    }

    updateQuest(quest: any) {
        return super.put(`/quest/${quest.id}`, quest);
    }
}