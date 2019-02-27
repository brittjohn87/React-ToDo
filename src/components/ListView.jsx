import React from 'react';
import { connect } from 'react-redux';

const ListView = ({ todos }) => {
    return (
        <>
            {todos.map(todo => (<p>{todo}</p>))}
        </>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

export default connect(mapStateToProps)(ListView);