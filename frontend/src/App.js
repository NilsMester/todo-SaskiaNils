import React, {useState} from 'react';
import styled from 'styled-components/macro';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import AddTodo from './components/AddTodo';
import AddSearch from './components/AddSearch';


export default function App() {
    const [todos, create, remove, advance] = useTodos();
    const [searchParam, setSearchParam] = useState('');
    const searchFilteredTodos = todos.filter((todo) => todo.description.includes(searchParam));
    return (
        <Main>
            <header>
                <h1>Super Kanban Board </h1>
                <AddSearch searchParam = {searchParam} setSearchParam = {setSearchParam}/>
                <AddTodo onAdd={create} />
            </header>
            <Board>
                <TodoList
                    status="OPEN"
                    todos={searchFilteredTodos}
                    onDelete={remove}
                    onAdvance={advance}
                />
                <TodoList
                    status="IN_PROGRESS"
                    todos={searchFilteredTodos}
                    onDelete={remove}
                    onAdvance={advance}
                />
                <TodoList
                    status="DONE"
                    todos={searchFilteredTodos}
                    onDelete={remove}
                    onAdvance={advance}
                />
            </Board>
        </Main>
    );
}

const Main = styled.main`
    height: 100vh;
    padding: 8px;

    h1 {
        color: hotpink;
    }
`;

const Board = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
`;
