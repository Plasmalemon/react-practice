import React, { useContext } from 'react';
import { Context } from './AppContext'

function UseContext(props) {
    const ctx = useContext(Context);
    return (
        <div>
            <h3>UseContextPage</h3>
            <p>{ctx.user.name}</p>
        </div>
    )
}

export default UseContext;
