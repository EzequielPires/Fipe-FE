import { useEffect, useState } from "react";
import { FiEye, FiEyeOff, FiKey, FiMail, FiPhone, FiUser, FiXCircle } from "react-icons/fi";
import { Container, Input, Label, Error} from "./styles";

interface Props {
    id: string;
    title: string;
    type: string;
    placeholder?: string;
    disabled?: boolean;
    value?: string;
    onChange?: any;
    onBlur?: any;
    error?: string;
}



export function InputText({ title, type, placeholder, id, onChange, value, onBlur, disabled, error }: Props) {
    const [iconShow, setIconShow] = useState(false);
    const [passwordShow, setPasswordShow] = useState(false);

    useEffect(() => {
        { type === 'email' || type === 'password' || type === 'username' || type === 'phone' ? setIconShow(true) : setIconShow(false) }
    }, [type]);

    const getType = (type: string) => {
        if (type && type != 'password') {
            return type;
        }
        if (type === 'password' && passwordShow || type === 'username') {
            return 'text';
        }
        if (type === 'password' && !passwordShow) {
            return 'password';
        }
        return 'text';
    }
    return (
        <Container icon={iconShow} error={error ? true : false}>
            <Label htmlFor={id}>{title}</Label>
            {type === 'email' && <FiMail />}
            {type === 'username' && <FiUser />}
            {type === 'phone' && <FiPhone />}
            {type === 'password' && <FiKey />}
            {type === 'password' && !passwordShow && <FiEye onMouseDown={() => setPasswordShow(!passwordShow)} />}
            {type === 'password' && passwordShow && <FiEyeOff onMouseDown={() => setPasswordShow(!passwordShow)} />}
            <Input
                icon={iconShow}
                type={getType(type)}
                placeholder={placeholder}
                id={id}
                value={value}
                disabled={disabled}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete="off"
                aria-autocomplete="none"
                error={error ? true : false}
            />
            {error &&
                <Error>{error}</Error>
            }
        </Container>
    )
}