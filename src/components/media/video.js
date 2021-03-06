import React, { Component } from 'react';

export class Video extends Component {
    constructor(props) {
        super(props)
        this._videoElement = null;
        this._setVideoElement = this._setVideoElement.bind(this);
        this._track = this.props.track;
    }

    componentDidMount() {
        this._track.attach(this._videoElement)
    }

    componentDidUpdate() {
        this._track.attach(this._videoElement);
    }

    shouldComponentUpdate(nextProps, nextState) {
        let newTrack = nextProps.track;
        if(this._track !== newTrack) {
            this._track.detach(this._videoElement);
            this._track = newTrack;
            return true;
        }
        return false;
    }

    componentWillUnmount() {
        // TODO: beware of chrome bug were we get black screen when chaning src of video
        this._track.detach(this._videoElement);
    }

    render() {
        let hide = this.props.hide ? "none": "initial";
        return <video
            data-testid={this.props.id + "-video-id"}
            id={this.props.id}
            style={{display: hide}}
            autoPlay={true}
            className={this.props.className}
            ref={this._setVideoElement}
        ></video>;
    }

    _setVideoElement(element) {
        this._videoElement = element;
    }
}
