import React from 'react';
import { Redirect } from 'react-router-dom';

function Logout() {
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT';

    return <Redirect to="/" />
}

export default Logout;
