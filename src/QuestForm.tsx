import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Quest} from "./types/Quest";
import QuestRequest from "./requests/QuestRequest";

class QuestForm extends React.Component<any, any>{
    private questRequests: QuestRequest;

    constructor(props: any) {
        super(props);
        this.questRequests = new QuestRequest();

        let quest: Quest = this.props.quest;

        if (quest == null) {
            quest = {
                name: ""
            }
        }

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
      return <div>
          <input type="text"/>
      </div>;
  }
}

export default QuestForm;
