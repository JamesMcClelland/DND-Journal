import {Accordion, AccordionDetails, AccordionSummary, Icon, Typography} from "@material-ui/core";
import {ExpandMore, Close} from "@material-ui/icons";
import Container from "@material-ui/core/Container";
import React from "react";
import QuestList from "./quest/QuestList";
import QuestRequest from "./requests/QuestRequest";
import QuestForm from "./quest/QuestForm";
import {Quest} from "./types/Quest";
import QuestView from "./quest/QuestView";

export default class MainMenu extends React.Component<any, any> {
    private questRequest: QuestRequest;
    constructor(props : any) {
        super(props);
        this.questRequest = new QuestRequest();
        this.state = {
            openedSegment: 'lists',
            showType: false,
            editType: false,
            quest: false,
            type: false,
        }
    }

    private keysPressed:any = [];

    private checkHotkeys() {
        if(this.keysPressed['Escape']) {
            //Reset forms
            this.setState({
                openedSegment: 'lists',
                quest: false,
            })
        }
    }

    private handleKeyDown = (event: any) => {
        this.keysPressed[event.key.toString()] = true;
        console.log(this.keysPressed);
        this.checkHotkeys();
    }
    private handleKeyUp = (event: any) => {
        delete this.keysPressed[event.key.toString()];
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown, false);
        document.addEventListener("keyup", this.handleKeyUp, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown, false);
        document.removeEventListener("keyup", this.handleKeyUp, false);
    }

    handleEditQuest(quest : Quest) {
        console.log(quest)
        this.setState({openedSegment:'edits'});
        console.log(this.state.openedSegment)
    }

    handleQuestShow = (quest : Quest) => {
        this.setState({
            openedSegment: 'show',
            type: 'quest',
            quest: quest
        });
    }

    handleQuestEdit = (quest: Quest) => {
        this.setState({
            openedSegment: 'edits',
            type: 'quest',
            quest: quest
        })
    }

    handleAddQuest = () => {
        this.setState({
            openedSegment: 'edits',
            type: 'quest',
        })
    }

    render () {
        return <div>
            {this.state.openedSegment !== 'lists' && <Icon key="close"/> }
            {this.state.openedSegment === 'show' &&
                <div>
                    {this.state.type === 'quest' && <QuestView quest={this.state.quest} onQuestEditClick={this.handleQuestEdit}/>}
                </div>
            }
            {this.state.openedSegment === 'edits' &&
                <div>
                    {this.state.type === 'quest' && <QuestForm quest={this.state.quest} onQuestAdded={this.handleQuestShow}/>}
                </div>
            }
            {this.state.openedSegment === 'lists' &&
                <div className="js-lists" >
                    <Accordion defaultExpanded={true}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography >Quests</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <QuestList onQuestClick={this.handleQuestShow} onQuestAddClick={this.handleAddQuest} questRequest={this.questRequest} />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion defaultExpanded={true}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography >Characters</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            }
        </div>
    }
}