
export default class QuestValidator {
    validateCreate(quest: any) {
        if (!quest) {
            alert("Please add some quest information");
            return false;
        }

        if (!quest.name) {
            alert("Please add a name");
            return false;
        }

        if (!quest.description) {
            alert("Please add a description");
            return false;
        }

        if (!quest.type) {
            alert("Please add a type");
            return false;
        }
        return true;
    }
}