import React from 'react';

const UserData = ({userData}) => {
    return (
        <div>
            Name:{userData.name} <br/>
            Phone:{userData.phone} <br/>
            
        </div>
    );
};

export default UserData;