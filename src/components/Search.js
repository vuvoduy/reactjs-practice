import React, { useState, useContext } from 'react';
import AppContext from '../contexts/AppContext';

function Search() {
    const [keyword, setKeyword] = useState("");
    const appContext = useContext(AppContext);
    const { searchChange } = appContext;
    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Input keyword..." value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyPress={(e) => { if (e.key === "Enter") { searchChange(keyword) } }} />
            <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={() => searchChange(keyword)}><i className="fa fa-search"></i>&nbsp;Search</button>
            </span>
        </div>
    );
}

export default Search;
