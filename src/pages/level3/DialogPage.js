import React, { useState } from 'react';
import Dialog from './components/Dialog';

function DialogPage() {
    const [show, setShow] = useState(false)
    return (
        <div>
            <h3>DialogPage</h3>
            <button onClick={() => setShow(!show)}>toggle</button>
            {show && <Dialog />}
        </div>
    )
}

export default DialogPage;
