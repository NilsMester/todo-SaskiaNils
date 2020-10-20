import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';
import PropTypes from 'prop-types';


TodoList.propTypes = {
    status: PropTypes.string.isRequired,
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })).isRequired,
    onDelete: PropTypes.func.isRequired,
    onAdvance: PropTypes.func.isRequired,
}


export default function TodoList({ status, todos, onDelete, onAdvance }) {
    const filteredTodos = todos.filter((todo) => todo.status === status);
    return (
        <StyledList>
            {filteredTodos.map((todo) => (
                <li key={todo.id}>
                    <Todo {...todo} onDelete={onDelete} onAdvance={onAdvance} />
                </li>
            ))}
        </StyledList>
    );
}

const StyledList = styled.ul`
    list-style: none;
    padding: 0;

    li + li {
        margin-top: 12px;
    }
`;
