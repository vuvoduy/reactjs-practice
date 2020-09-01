import React, { Fragment } from 'react';
import Search from './Search';
import Sort from './Sort';

function Control(props) {
    return (
        <Fragment>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Search searchChange={props.searchChange} />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Sort sortInfo={props.sortInfo} sortChange={props.sortChange} />
            </div>
        </Fragment>
    );
}

export default Control;
