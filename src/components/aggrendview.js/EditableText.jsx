import React, { useState } from 'react';
import InsultButton from './InsultButton';

const EditableText = ({ defaultValue, onChange, incrementCounter }) => {
    const [editedText, setEditedText] = useState(defaultValue);

    const handleChange = (event) => {
        setEditedText(event.target.value);
    };

    const handleUpdate = () => {
        onChange(editedText);
        incrementCounter();
    };

    return (
        <div>
            <input
                type='text'
                value={editedText}
                onChange={handleChange}
            />
            <InsultButton onClick={handleUpdate}>Update</InsultButton>
        </div>
    );
};

export default EditableText;
