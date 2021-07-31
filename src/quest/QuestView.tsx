import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Quest} from "../types/Quest";
import QuestRequest from "../requests/QuestRequest";
import Button from '@material-ui/core/Button';
import {Box, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography} from "@material-ui/core";
import QuestListItem from "./QuestListItem";
import {Note} from "../types/Note";
import QuestStatusChips from "./QuestStatusChips";
import {Edit} from "@material-ui/icons";

class QuestView extends React.Component<any, any>{
    private questRequests: QuestRequest;

    constructor(props: any) {
        super(props);
        this.questRequests = new QuestRequest();

        let quest: Quest = this.props.quest;

        this.state = {
            quest: quest
        };
    }

    componentDidMount() {
        const self = this;
        this.questRequests.getQuestNotes(this.props.quest).then((result) => {
            self.setState({notes: result.notes})
        });
    }

  render () {
      return <Box mt={2}>
          <form>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <Typography variant={"h5"} >{this?.props?.quest.name}</Typography>
                    <Button onClick={() => this.props.onQuestEditClick(this.props.quest)} variant="contained" color="primary" endIcon={<Edit/>}>Edit Quest</Button>
                </Grid>
                <Grid item xs={12}>
                    {this?.props?.quest.description}
                </Grid>
                <Grid item xs={12}>
                    <QuestStatusChips quest={this.props.quest} />
                </Grid>
                <Grid item xs={12}>
                    Notes:
                </Grid>
                {this.state.notes && <Grid item xs={12}>
                    {this.state.notes.map((note: Note) => <div>{note.body}</div>)}
                </Grid>}
              </Grid>
          </form>
      </Box>;
  }
}

export default QuestView;
