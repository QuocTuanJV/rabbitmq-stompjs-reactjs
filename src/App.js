import React, {useEffect, useState} from 'react';
import './App.css';
import Stomp from 'stompjs';
import {connect} from "mqtt";
import Camera01 from "./components/Camera01";
import Camera02 from "./components/Camera02";
function connectRabbit() {
    let stompClient;
    // var ws = new WebSocket('ws://42.112.31.48:15674/ws');
    var ws = new WebSocket('ws://localhost:15674/ws');
    // var ws = new WebSocket('ws://123.25.30.53:15674/ws');
    const headers = {
        'login': 'guest',
        'passcode': 'guest',
        'durable': 'false',
        'auto-delete': 'true',
    };

    // const headers = {
    //     'login': 'guest',
    //     'passcode': 'guest',
    //     'durable': 'true',
    //     'auto-delete': 'false',
    // };
    stompClient = Stomp.over(ws);
    stompClient.connect(headers, function(frame) {
        const subscription = stompClient.subscribe('/queue/javatechie_queue', function(message) {
        // const subscription = stompClient.subscribe('/queue/videoanalysis.video.queue1', function(message) {
        //     let quote = JSON.parse(message.body);
            // console.log(quote.mess);
            // subscription.unsubscribe();
            console.log(message);
        });
        // console.log(subscription);
        // subscription.unsubscribe();
    });
}
// const connectRabbit = () => {
//   let url = 'ws://localhost:61614/stomp';
//   let Stomp = require('stompjs');
//   // let url = 'ws://local.host/stomp';
//   // let client = Stomp.client(url);
//   let client = Stomp.overWS('url');
//
//
//
//   let headers = {
//         'login': 'guest',
//         'passcode': 'guest',
//         // additional header
//         // 'client-id': 'my-client-id'////
//     };
//
//   client.connect(headers, function () {
//         console.log('Connected----------')
//       let subscription = client.subscribe("/queue/tasks", function (message) {
//         console.log(message.body)
//       });
//
//   })
// };

function App() {
    // const [imageStream, setImageStream] = useState(null);
    //
    //
    // useEffect(() => {
    //     // connectRabbit();
    //     let stompClient;
    //     var ws = new WebSocket('ws://42.112.31.48:15674/ws');
    //     const headers = {
    //         'login': 'bzcomdev',
    //         'passcode': 'bzcomdev1004',
    //         'durable': 'false',
    //         'auto-delete': 'true',
    //     };
    //
    //     stompClient = Stomp.over(ws);
    //     stompClient.connect(headers, function(frame) {
    //         // const subscription = stompClient.subscribe('/queue/tasks', function(message) {
    //             const subscription = stompClient.subscribe('/queue/videoanalysis.video.queue1', function(message) {
    //             let quote = JSON.parse(message.body);
    //             const stringImage64 = quote.mess;
    //             const urlImage = getURLImage(stringImage64);
    //             setImageStream(urlImage);
    //             // subscription.unsubscribe();
    //         });
    //     });
    // }, []);
    //
    // const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    //     const byteCharacters = atob(b64Data);
    //     const byteArrays = [];
    //
    //     for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    //         const slice = byteCharacters.slice(offset, offset + sliceSize);
    //
    //         const byteNumbers = new Array(slice.length);
    //         for (let i = 0; i < slice.length; i++) {
    //             byteNumbers[i] = slice.charCodeAt(i);
    //         }
    //
    //         const byteArray = new Uint8Array(byteNumbers);
    //         byteArrays.push(byteArray);
    //     }
    //
    //     const blob = new Blob(byteArrays, {type: contentType});
    //     return blob;
    // };
    //
    // const getURLImage = (stringImage64) => {
    //     const contentType = 'image/jpeg';
    //     const blob = b64toBlob(stringImage64, contentType);
    //     // return URL.createObjectURL(blob);
    //     return window.webkitURL.createObjectURL(blob);
    // }

    useEffect(() => {
        connectRabbit();
    },[]);

    return (
        <div className="App" style={{display: 'flex', flexDirection: 'row'}}>

        </div>
    );
}
export default App;


// import React, { useEffect } from 'react';
// import './App.css';
// import Stomp from 'stompjs';
// function connectRabbit() {
//     let stompClient;
//     var ws = new WebSocket('ws://42.112.31.48:15674/ws')
//     const headers = {
//         'login': 'bzcomdev',
//         'passcode': 'bzcomdev1004',
//         'durable': 'true',
//         'auto-delete': 'false'
//     };
//     stompClient = Stomp.over(ws);
//     stompClient.connect(headers, function(frame) {
//         console.log('Connected');
//         const subscription = stompClient.subscribe('/queue/videoanalysis.video.queue1', function(message) {
//             console.log(message);
//         });
//         // console.log(subscription);
//     });
// }
// function App() {
//     useEffect(() => {
//         connectRabbit();
//     }, []);
//
//     return (
//         <div className="App">
//         </div>
//     );
// }
// export default App;
