import QuestRequest from "../requests/QuestRequest";
import React from "react";
import {Quest} from "../types/Quest";
import QuestListItem from "./QuestListItem";
import {Box} from "@material-ui/core";

export default class QuestList extends React.Component<any, any> {
    private questRequest: QuestRequest;
    constructor(props: any) {
        super(props);
        this.state = {
            quests : [],
            ready: false
        }

        this.questRequest = this.props.questRequest;
    }

    fetchQuests() {
        this.questRequest.getQuests().then((quests) => {
            this.setState({
                quests: quests,
                ready: true
            });
        }).catch((err) => {
            this.setState({
                ready: true
            });
        })
    }

    componentWillReceiveProps(props: any) {
        const { refresh, id } = this.props;
        if (props.refresh !== refresh) {
            this.fetchQuests()
        }
    }

    componentDidMount() {
        // this.questRequest
        // const self = this;
        this.fetchQuests()
    }

    render() {
        return <Box flexGrow={1}>
            {this.state.ready
                ? this.state.quests.map((quest: Quest) => <QuestListItem quest={quest} key={quest.id}/>)
                :<div>Getting quests</div>
            }
        </Box>
    }
}