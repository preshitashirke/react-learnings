import React, { memo } from 'react';

const MemoExample = memo(({name}) => {
    console.log("Memo example render is called...");
    return (
        <div>{`Hello ${name}`}</div>
    );
});

export default MemoExample;
