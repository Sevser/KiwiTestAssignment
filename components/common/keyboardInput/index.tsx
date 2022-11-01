import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Keyboard from '../keyboard';

import styles from './KeyboardInput.module.css';

declare type FormControlElement = HTMLInputElement | HTMLTextAreaElement;

const KeyboardInput = ({ value = '', onChange }: { value: string, onChange?: (a: string) => void }) => {
    const [_value, setValue] = useState(value);
    const updateValue = (value: string) => {
        if (onChange) {
            onChange(value)
        }
        setValue(() => value);
    }
    const handleChange = (event: FormControlElement) => {
        const re = /^[0-9\b]+$/;

        if (event.target.value === '' || re.test(event.target.value)) {
            updateValue(event.target.value);
        }
    };

    const handleClick = (event: number) => {
        updateValue(value.concat(event));
    };

    return (
        <div className={styles.container}>
            <Form.Group className="mb-3 w-75 container">
                <Form.Label htmlFor="textInput">InputNumbers</Form.Label>
                <Form.Control id="textInput" placeholder="Input numbers" onChange={handleChange} value={_value} />
            </Form.Group>
            <Keyboard onInput={handleClick} />
        </div>
    );
};

export default KeyboardInput;