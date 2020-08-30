import React from 'react';

function Search() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Input keyword..." />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button"><i className="fa fa-search"></i>&nbsp;Search</button>
                </span>
            </div>
        </div>
    );
}

export default Search;
