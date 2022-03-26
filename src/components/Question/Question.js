import React from 'react';

const Question = () => {
    return (
        <div>
            <h3>How React Works?</h3>

            <p>Ans : React uses a declarative paradigm that makes it easier to reason about your application. <br />Aims to be both efficient and flexible.<br />
                It designs simple views for each state in your application.<br />
                React will efficiently update and render just the right component when your data change.<br />
                What you picture could look like the screen below, with a navbar, a header, a filter, and a list.
                s</p><br />
            <h3>Props vs State..</h3>

            <p>Ans :  Props: Props are known as properties it can be used to pass data from one component to another.<br />
                Props cannot be modified, read-only, and Immutable.<br />
                Props can be used with state and functional components..

                <p>State : The state represents parts of an Application that can change.<br /> Each component can have its State. <br />The state is Mutable and It is local to the component only.<br /></p>
                <p>State : The state represents parts of an Application that can change.<br /> Each component can have its State. <br />The state is Mutable and It is local to the component only.<br /></p>

            </p>
        </div>
    );
};

export default Question;