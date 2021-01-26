import { FC } from 'react';
import classes from './Button.module.scss';

type ButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export const Button: FC<ButtonProps> = (props) => {
    return (
        <button
            {...props}
            className={(props.className ?? '') + ' ' + classes.button}
        />
    );
};
