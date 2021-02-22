import React, {useEffect} from 'react';
import mqtt from 'mqtt';

export default () => {
    const [connectionStatus, setConnectionStatus] = React.useState(false);
    const [messages, setMessages] = React.useState([]);

    useEffect(() => {
        const client = mqtt.connect('location.host');


    }, []);
}