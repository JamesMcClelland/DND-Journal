import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Quest} from "../types/Quest";
import QuestRequest from "../requests/QuestRequest";
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";

class QuestForm extends React.Component<any, any>{
    private questRequests: QuestRequest;

    constructor(props: any) {
        super(props);
        this.questRequests = new QuestRequest();

        let quest: Quest = this.props.quest;

        // if (quest == null) {
        //     quest = {
        //         name: "",
        //         active: false,
        //     }
        // }

        this.state = {
            quest: quest
        };
    }

    componentDidMount() {
        this.questRequests.getQuests().then((result) => {
            console.log(result);
        });
    }

  render () {
      return <form>
          <TextField id="standard-basic" label="Name" />
          <Button variant="contained" color="primary">
              Save
          </Button>
          <input type="text"/>
      </form>;
  }
}

export default QuestForm;
