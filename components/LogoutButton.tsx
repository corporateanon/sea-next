import { useCallback } from 'react';
import { Button } from './Button';

export const LogoutButton = () => {
    const redirect = useCallback(() => {
        document.location.href = '/api/auth/gh/logout';
    }, []);
    return <Button onClick={redirect}>Sign Out</Button>;
};
