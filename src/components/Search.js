import React, { useState, Fragment } from 'react';

function Search(props) {
    const [keyword, setKeyword] = useState("");
    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Input keyword..." value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={() => props.searchChange(keyword)}><i className="fa fa-search"></i>&nbsp;Search</button>
            </span>
        </div>
    );
}

export default Search;
