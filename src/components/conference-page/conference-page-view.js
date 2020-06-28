import React, { Component } from 'react';
import './conference-page.css';
import ParticipantList from '../participant_list';
import { BsMic} from 'react-icons/bs';

export default class ConferencePageView extends Component {
    state = {
        inputValue: ''
    }

    inputChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        const { clickButton, newValue } = this.props;

        const { inputValue } = this.state;

        return (
            <div className="App" style={{}}>
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
                    <div style={{ flex: '1' }}>
                    </div>
                    <div className="bottomBar">
                        <div className="selfMuteDiv">
                            <button className="selfMuteButton">
                                <BsMic className="selfMute">
                                </BsMic>
                                <span className="selfMuteText">Mute</span>
                            </button>

                        </div>
                        <div style={{ flex: '1' }}>

                        </div>
                        <div className="endMeetingDiv">
                            <button className="endMeetingButton">End Meeting</button>
                        </div>
                    </div>
                </div>
                <ParticipantList></ParticipantList>

            </div>
        );
    }
}