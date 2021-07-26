import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";
import Container from "@material-ui/core/Container";
import React from "react";
import QuestList from "./quest/QuestList";
import QuestRequest from "./requests/QuestRequest";

export default class MainMenu extends React.Component<any, any> {
    private questRequest: QuestRequest;
    constructor(props : any) {
        super(props);

        this.questRequest = new QuestRequest();
    }
    render () {
        return <div>
            <Accordion defaultExpanded={true}>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography >Quests</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <QuestList questRequest={this.questRequest} />
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
}