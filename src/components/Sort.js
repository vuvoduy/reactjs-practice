import React from 'react';

function Sort() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort&nbsp;<i className="fa fa-caret-square-o-down"></i>
                </button>
                <ul className="dropdown-menu">
                    <li><a role="button"><i className="fa fa-sort-alpha-asc"></i>&nbsp;Name</a></li>
                    <li><a role="button"><i className="fa fa-sort-alpha-desc"></i>&nbsp;Name</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a role="button">Active</a></li>
                    <li><a role="button">Inactive</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Sort;
