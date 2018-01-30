import React from 'react'
const RowComponent = (props) => {
    return (
        <div className="mdl-cell mdl-cell--12-col">
            <div className="row-elem">
                <div className="mdl-cell mdl-cell--12-col item row-elem">
                    <div className="mdl-cell mdl-cell--1-col item">
                        <span> <i className="material-icons">account_circle</i></span>
                    </div>
                    <div className="mdl-cell mdl-cell--4-col item user-row">
                        <span> {props.user.name}</span>
                        <span>{props.user.id}</span>
                    </div>
                    <div className="mdl-cell mdl-cell--2-col item">
                        <span> {props.user.type}</span>
                    </div>
                    <div className="mdl-cell mdl-cell--2-col item">
                        <span> {props.user.company}</span>
                    </div>
                    <div className="mdl-cell mdl-cell--2-col item">
                        <span> {props.user.location}</span>
                    </div>
                    <div className="mdl-cell mdl-cell--2-col item">
                        <span> {props.user.location}</span>
                    </div>
                    <div className="mdl-cell mdl-cell--2-col item">
                        <button onClick={() => props.additionalInfo()} className=" additional-info btn" type="submit"
                                name="action">more info
                        </button>
                    </div>
                </div>
            </div>
            <div className="row-elem">
                {props.openAdditianalInfo && <div className="mdl-cell mdl-cell--12-col item row-elem">
                    <div className="mdl-cell mdl-cell--2-col item">
                        <span>Number of repo: {props.userinfoAdditional.repos.length}</span>
                    </div>
                    <div className="mdl-cell mdl-cell--2-col item">
                        <span>Number of Followers: {props.userinfoAdditional.followers.length}</span>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default RowComponent
