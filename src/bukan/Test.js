import React from 'react';
import './test.css';

const Test = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-custom-row">
          <div className="col-lg-4">Hello There</div>
          <div className="col-lg-4">It's Me Hi</div>
          <div className="col-lg-4">My Name is Erika</div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <button type="button" className="btn btn-primary">
              Click Me!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
