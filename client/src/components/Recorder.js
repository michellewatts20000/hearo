import React, { Component } from "react";
import AudioAnalyser from "react-audio-analyser";
import { Button, Box } from "@chakra-ui/react";

export default class demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
    };
  }

  componentDidMount() {}

  controlAudio(status) {
    this.setState({
      status,
    });
  }

  changeScheme(e) {
    this.setState({
      audioType: e.target.value,
    });
  }

  render() {
    const { status, audioSrc, audioType } = this.state;
    const audioProps = {
      audioType,
      audioOptions: { sampleRate: 30000 }, // 设置输出音频采样率
      status,
      audioSrc,
      timeslice: 1000, // timeslice（https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/start#Parameters）
      startCallback: (e) => {
        console.log("succ start", e);
      },
      pauseCallback: (e) => {
        console.log("succ pause", e);
      },
      stopCallback: (e) => {
        this.setState({
          audioSrc: window.URL.createObjectURL(e),
        });
        console.log("succ stop", e);
      },
      onRecordCallback: (e) => {
        console.log("recording", e);
      },
      errorCallback: (err) => {
        console.log("error", err);
      },
    };
    return (
      <Box>
        <AudioAnalyser {...audioProps}>
          <Box>
            {status !== "recording" && (
              <Button
                mr={5}
                className="iconfont icon-start"
                onClick={() => this.controlAudio("recording")}
              >
                Record
              </Button>
            )}
            {status === "recording" && (
              <Button
                className="iconfont icon-pause"
                onClick={() => this.controlAudio("paused")}
              >
                Pause
              </Button>
            )}
            <Button
              className="iconfont icon-stop"
              onClick={() => this.controlAudio("inactive")}
            >
              Stop
            </Button>

            {console.log(audioSrc)}
          </Box>
        </AudioAnalyser>
        {/* <Text>choose output type</Text>
        <select
          name=""
          id=""
          onChange={(e) => this.changeScheme(e)}
          value={audioType}
        >
          <option value="audio/webm">audio/webm（default）</option>
          <option value="audio/wav">audio/wav</option>
          <option value="audio/mp3">audio/mp3</option>
        </select> */}
      </Box>
    );
  }
}
