import React from 'react'

const SearchComponent = (props) => {
    let user;
    const userValue = (value) => {
        user = value.target.value;
    };

    return (
        <div className="mdl-cell mdl-cell--12-col search-elem">
            <div className="mdl-cell mdl-cell--1-col item">
                <span> <i className="material-icons">search</i></span>
            </div>
            <div className="mdl-cell mdl-cell--4-col">
                <form action="#">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input searchInput" type="text" id="sample3"
                               onChange={userValue}></input>
                        <label className="mdl-textfield__label" htmlFor="sample3">Search User</label>
                    </div>
                </form>
            </div>
            <button onClick={() => props.clickSearch(user)} className=" btn" type="submit" name="action">Search user
            </button>

        </div>
    )
};

export default SearchComponent
