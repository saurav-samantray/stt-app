import React, {Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'

import Typography from '@material-ui/core/Typography';
import MicNoneIcon from '@material-ui/icons/MicNone';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


class Dictaphone extends Component {
  

  render() {
    const { transcript, resetTranscript,startListening, browserSupportsSpeechRecognition } = this.props
    //const classes = useStyles();
    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div>
        <TextField fontSize='large' id="standard-search" label="Search field" type="search" />
        <MicNoneIcon  colorPrimary fontSize='large' onClick={startListening }> </MicNoneIcon>
        <Typography variant="h1" component="h2">
          {transcript}
        </Typography>
      </div>
    )
  }
}

const options = {
  continuous : false,
  autoStart: false
}

export default SpeechRecognition(options)(Dictaphone)