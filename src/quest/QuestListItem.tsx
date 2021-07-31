import React from "react";
import {Quest} from "../types/Quest";
import {Box, Chip} from "@material-ui/core";
import QuestStatusChips from "./QuestStatusChips";

export default class QuestListItem extends React.Component<any, any>{
    private quest : Quest;

    constructor(props: any) {
        super(props);
        this.quest = this.props.quest;
    }

    render() {
        return <Box component="div" m={1} display="flex" flexGrow={1} style={{cursor:'pointer'}} onClick={() => {this.props.onQuestClick(this.quest)}}>
            <Box flexGrow={1}>{this.quest.name}</Box>
            <Box>
                <QuestStatusChips quest={this.quest}/>
            </Box>
        </Box>;
    }
}
