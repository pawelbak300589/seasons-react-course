import { useState, useEffect } from 'react';

export default () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => setLat(position.coords.latitude),
            (err) => setErrorMessage(err.message)
        );
    }, []);

    return [lat, errorMessage]; // this is community approach to use array return, but it is not the best if you want to change returned values in the future - you will need to change things in other places too...
};