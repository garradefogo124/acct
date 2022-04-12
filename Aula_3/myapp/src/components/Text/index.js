import React from 'react';

const Text = ({message = "", bolder = false}) => {
    if(bolder) {
        return <strong>{message}</strong>;
    }
    return <p>{message}</p>
}

export default Text;