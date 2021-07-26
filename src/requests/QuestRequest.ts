import {AppRequest} from "./AppRequest";

export default class QuestRequest extends AppRequest {
    getQuests() {
        return super.get('/quest/');
    }
}