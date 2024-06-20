import React from 'react';
import Count from './count';
import EditableText from './EditableText';
import { useState } from 'react';

function InsultText({ count, incrementCounter }) {
    const [customText, setCustomText] = useState('slobbering dog');

    return (
        <div>
            <EditableText
                defaultValue={customText}
                onChange={setCustomText}
                incrementCounter={incrementCounter}
            />
            <p>
                Aggrend has been called a {customText} <Count count={count} />{' '}
                times.
            </p>
        </div>
    );
}

export default InsultText;
