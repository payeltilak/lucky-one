import React from 'react';

const Question = () => {
    return (
        <div>
            <h3>How React Works?</h3>
            <p>Ans : React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes</p><br />
            <h3>Props vs State..</h3>
            <p>Ans : Props: Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.<br />
                <p>State : The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>

            </p>
        </div>
    );
};

export default Question;