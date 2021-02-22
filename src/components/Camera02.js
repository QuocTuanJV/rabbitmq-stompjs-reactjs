import React, {useEffect, useState} from 'react';
import Stomp from 'stompjs';

const Camera02 = () => {
    const [imageStream, setImageStream] = useState(null);

    useEffect(() => {
        // connectRabbit();
        let stompClient;
        var ws = new WebSocket('ws://42.112.31.48:15674/ws');
        const headers = {
            'login': 'bzcomdev',
            'passcode': 'bzcomdev1004',
            'durable': 'false',
            'auto-delete': 'true',
        };

        stompClient = Stomp.over(ws);
        stompClient.connect(headers, function(frame) {
            // const subscription = stompClient.subscribe('/queue/tasks', function(message) {
            const subscription = stompClient.subscribe('/queue/videoanalysis.video.queue1', function(message) {
                let quote = JSON.parse(message.body);
                const stringImage64 = quote.mess;
                const urlImage = getURLImage(stringImage64);
                setImageStream(urlImage);
                // subscription.unsubscribe();
            });
        });
    }, []);

    const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, {type: contentType});
        return blob;
    };

    const getURLImage = (stringImage64) => {
        const contentType = 'image/jpeg';
        const blob = b64toBlob(stringImage64, contentType);
        // return URL.createObjectURL(blob);
        return window.webkitURL.createObjectURL(blob);
    }

    return (
        <div>
            {
                imageStream !== null ? (<img src={imageStream} style={{height: "300px", width: "auto"}} />) : null
            }
        </div>
    );

};

export default Camera02;



