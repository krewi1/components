import * as React from "react";
import { styled } from "../../theme/theme";

interface IProps {
    onChange: (value: string) => void;
    value: string;
    label: string;
    onBlur?: (value: string) => void;
}

export const TextInput: React.FunctionComponent<IProps> = props => {
    function changeHandler(ev: React.ChangeEvent<HTMLInputElement>) {
        props.onChange(ev.target.value);
    }
    function blurHandler(ev: React.ChangeEvent<HTMLInputElement>) {
        props.onChange(ev.target.value);
    }
    return (
        <FieldSetDiv>
            <Input
                type="text"
                id="rc-text-input"
                name="rc-text-input"
                required={true}
                value={props.value}
                onChange={changeHandler}
                onBlur={blurHandler}
            />
            <Label htmlFor="rc-text-input">{props.label}</Label>
            <AfterDiv />
        </FieldSetDiv>
    );
};

const FieldSetDiv = styled.div`
    position: relative;
    border: none;
`;

const Label = styled.label`
    position: absolute;
    top: 16px;
    left: 0;
    color: rgba(0, 0, 0, 0.3);
    transform-origin: left;
    transition: all 0.3s ease;
    font-size: 20px;
    cursor: text;
`;

const AfterDiv = styled.div`
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, ${props => props.theme.primaryColor} 50%, transparent 50%);
    background-color: rgba(0, 0, 0, 0.3);
    background-size: 200% 100%;
    background-position: 100% 0;
    transition: all 0.6s ease;
`;

const Input = styled.input`
    font-size: 20px;
    width: 100%;
    border: none;
    margin-top: 10px;

    :valid ~ label {
        top: 0;
        transform: scale(0.6, 0.6);
    }
    :focus {
        outline: none;
        ~ label {
            color: ${props => props.theme.primaryColor};
            top: -2px;
            transform: scale(0.6, 0.6);
        }
        ~ ${AfterDiv} {
            background-color: ${props => props.theme.primaryColor};
        }
    }
`;
