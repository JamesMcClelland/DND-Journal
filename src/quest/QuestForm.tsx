import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Quest} from "../types/Quest";
import QuestRequest from "../requests/QuestRequest";
import Button from '@material-ui/core/Button';
import {Box, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography} from "@material-ui/core";
import QuestValidator from "../validators/QuestValidator";

class QuestForm extends React.Component<any, any>{
    private questRequests: QuestRequest;
    private questValidator: QuestValidator;

    constructor(props: any) {
        super(props);
        this.questRequests = new QuestRequest();
        this.questValidator = new QuestValidator();

        let quest: Quest = this.props.quest;
        if (quest) {
            this.state = {
                id: quest.id,
                name: quest.name,
                description: quest.description,
                type: quest.quest_type.type
            };
        }
    }

    handleInputChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    saveQuest = (event: any) => {
        event.preventDefault();
        const self = this;
        if (this.questValidator.validateCreate(this.state)) {
            if (this.state.id) {
                this.questRequests.updateQuest(this.state).then((result) => {
                    //Todo add error handling
                    self.props.onQuestAdded(result);
                });
            } else {
                this.questRequests.createQuest(this.state).then((result) => {
                    //Todo add error handling
                    self.props.onQuestAdded(result);
                });
            }
        }
    }

  render () {
      return <Box mt={2}>
          <form onSubmit={this.saveQuest}>
            <Grid container spacing={2} >
                <input type="hidden" name="id" value={this?.props?.quest?.id} />
                <Grid item xs={12}>
                    <Typography variant={"h4"} >Quest Form</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField name="name" label="Quest Name" defaultValue={this?.props?.quest?.name} onChange={this.handleInputChange} />
                </Grid>
                <Grid item xs={12}>
                    <TextField name="description" label="Description" defaultValue={this?.props?.quest?.description} onChange={this.handleInputChange}/>
                </Grid>
                <Grid item xs={12}>
                    <FormLabel component="legend">Quest Type</FormLabel>
                    <RadioGroup name="type" defaultValue={this?.props?.quest?.quest_type?.type} onChange={this.handleInputChange}>
                        <FormControlLabel control={<Radio />} value="Primary" label="Primary" />
                        <FormControlLabel control={<Radio />} value="Secondary" label="Secondary" />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                      Save
                  </Button>
                </Grid>
              </Grid>
          </form>
      </Box>;
  }
}

export default QuestForm;
