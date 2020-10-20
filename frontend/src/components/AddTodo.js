import React, { useState } from 'react';
import PropTypes from 'prop-types';


AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default function AddTodo({ onAdd }) {
    const [description, setDescription] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Describe new todo
                <input
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </label>

            <button type="submit">Abschicken</button>
        </form>
    );

    function handleSubmit(event) {
        event.preventDefault();
        onAdd(description);
        setDescription('');
    }
}
