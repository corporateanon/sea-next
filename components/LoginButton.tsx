import { useCallback } from 'react';
import { Button } from './Button';

export const LoginButton = () => {
    const redirect = useCallback(() => {
        document.location.href = '/api/auth/gh';
    }, []);
    return <Button onClick={redirect}>Sign In</Button>;
};
