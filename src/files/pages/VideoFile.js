import React, {useState,useRef,useEffect} from "react";
import { Player, BigPlayButton } from 'video-react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "video-react/styles/scss/video-react.scss";


const VideoFile = () => {
    const [playerSource, setPlayerSource] = useState('https://media.w3.org/2010/05/sintel/trailer_hd.mp4');
    const [inputVideoUrl, setInputVideoUrl] = useState('http://www.w3schools.com/html/mov_bbb.mp4');
    const playerRef = useRef(null);

    useEffect(() => {
        if (playerRef.current) {
            playerRef.current.load();
        }
    }, [playerSource]);

    return (
        <div>
            <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                <BigPlayButton position="center" />
            </Player>
        </div>
    );
};

export default VideoFile;