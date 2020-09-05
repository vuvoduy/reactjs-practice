import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

function Sort() {
    const appContext = useContext(AppContext);
    const {sortInfo, sortChange} = appContext;

    return (
        <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort&nbsp;<i className="fa fa-caret-square-o-down"></i>
            </button>
            <ul className="dropdown-menu">
                <li className={sortInfo.by === "name" && sortInfo.value === 1 ? "active" : null}><a role="button" onClick={() => sortChange("name", 1)}><i className="fa fa-sort-alpha-asc"></i>&nbsp;Name Ascending</a></li>
                <li className={sortInfo.by === "name" && sortInfo.value === -1 ? "active" : null}><a role="button" onClick={() => sortChange("name", -1)}><i className="fa fa-sort-alpha-desc"></i>&nbsp;Name Descending</a></li>
                <li role="separator" className="divider"></li>
                <li className={sortInfo.by === "status" && sortInfo.value === -1 ? "active" : null}><a role="button" onClick={() => sortChange("status", -1)}>Active</a></li>
                <li className={sortInfo.by === "status" && sortInfo.value === 1 ? "active" : null}><a role="button" onClick={() => sortChange("status", 1)}>Inactive</a></li>
            </ul>
        </div>
    );
}

export default Sort;
