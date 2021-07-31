import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Quest} from "./types/Quest";
import {QuestStatus} from "./types/QuestStatus";
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";
import Container from "@material-ui/core/Container";
import MainMenu from "./MainMenu";

class App extends React.Component {
  render () {
    return <Container maxWidth="sm">
      <Typography variant="h3">DND Journal</Typography>
      <MainMenu />
    </Container>;
  }
}

export default App;
