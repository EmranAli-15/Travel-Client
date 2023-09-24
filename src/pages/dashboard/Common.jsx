import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAdminSecureQuery } from '../../features/auth/authApi';

const Common = () => {

    const { user } = useSelector(state => state.auth);
    const { email } = user || {};
    const { data, isLoading, isSuccess } = useAdminSecureQuery(email)

    // decide what to render
    let content = null;
    if (isLoading) {
        return content = <p>Loading...</p>
    }
    if (!isLoading && isSuccess) {
        return content = <div>
            {
                data && !isLoading && isSuccess && <Navigate to="/dashboard/adminHome"></Navigate> ||
                !data && !isLoading && <Navigate to="/dashboard/userHome"></Navigate> ||
                <p>Loading</p>
            }
        </div>
    }

    return (
        <div>
            {
                content
            }
        </div>
    );
};

export default Common;