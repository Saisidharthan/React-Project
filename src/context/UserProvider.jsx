import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [isAuthenticated, setAuthentication] = useState(false);

    const UserValue = useMemo(() => {
        return {
            isAuthenticated,
            loggedIn: () => setAuthentication(true),
            loggedOut: () => setAuthentication(false)
        };
    }, [isAuthenticated]);

    return (
        <UserContext.Provider value={UserValue}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default UserProvider;