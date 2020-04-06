import React from 'react';

import '../styles/layout.scss';

function Layout() {
  return (
        <div className="content-wrapper">
            <h2>Spinner</h2>
            <div>
                <div className="spinner-normal">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="spinner-square-to-circle">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <h2>Button</h2>
            <div>
                <button className="btn btn-primary">
                    <span className="spinner-border spinner-border-sm"></span>
                </button>
                <button className="btn btn-primary ml-2">
                    <span className="spinner-border spinner-border-sm"></span> <span>Loading..</span>
                </button>
            </div>
        </div>
  );
};

export default Layout;
