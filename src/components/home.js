import React, { useContext, useState, Fragment } from 'react';
import { usePosition } from 'use-position';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import { AuthContext } from '../providers/authentication';
import { Autocomplete } from './autocomplete';
import screenShot from '../assets/screenshot.png';

export const Home = () => {
    const [value, setValue] = useState('');
    const [latLng, setLatLng] = useState({});
    const [loading, setLoading] = useState(false);
    const { signOutUser, token } = useContext(AuthContext);

    const watch = true;
    const {
        latitude,
        longitude,
    } = usePosition(watch);

    const onClick = async (e) => {
        setLoading(true);
        if (e) e.preventDefault();
        await signOutUser();
    };

    const handleChange = address => {
        setValue(address);
    };
    
    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => {
                setValue(results[0].formatted_address);
                getLatLng(results[0])
                .then(latLng => {
                    setLatLng(latLng);
                })
            })
            .catch(error => console.error('Error', error));
    };

    return (
        <div>
            {
                loading ? <p>loading....</p>
                : token ? (
                    <div className="center-text">
                        <h1>Welcome home</h1>
                        <button onClick={onClick}>Sign Out</button>
                        <div className="user-info">
                            <Autocomplete
                                value={value}
                                onChange={handleChange}
                                onSelect={handleSelect}
                            />
                            { latLng && latLng.lat && <p> Destination Lat, Lng: [{latLng.lat}, {latLng.lng}]</p> }
                        </div>
                        {
                            !latitude || !longitude ? (
                                <Fragment>
                                    <p>Please Allow browser to use your location before we can display your path, once approved please <strong>Refresh</strong> your browser</p>
                                    <div className="user-info">
                                        <img src={screenShot} height="200" alt="screenshot" />
                                    </div>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <div className="user-info">
                                    <h4>Current User Location Details:</h4>
                                    <p>Latitude: {latitude}</p>
                                    <p>Longitude: {longitude}</p>
                                    </div>
                                </Fragment>
                            )
                        }
                    </div>
                ) : ''
            }
        </div>
    );
};
