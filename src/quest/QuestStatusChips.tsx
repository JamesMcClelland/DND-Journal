import {Box, Chip} from "@material-ui/core";
import React from "react";
import {Quest} from "../types/Quest";
import { spacing } from '@material-ui/system';

export default class QuestStatusChips extends React.Component<any, any>{
    private quest: Quest;
    constructor(props: any) {
        super(props);
        this.quest = this.props.quest;
    }

    getStatusColor() {
        const status = this.quest.quest_status.status;
        return (status === 'Pending' || status === 'Failed' || status === 'Stalled') ? 'default' : 'primary';
    }

    getTypeColor() {
        return this.quest.quest_type.type == 'Secondary' ? 'secondary' : 'primary';
    }

    render() {
        return <Box component="span">
            {this.quest?.quest_status?.status && <Box component="span" mr={1}><Chip label={this.quest.quest_status.status} color={this.getStatusColor()} /></Box>}
            {this.quest?.quest_type?.type && <Chip label={this.quest.quest_type.type} color={this.getTypeColor()} />}
        </Box>
    }
}