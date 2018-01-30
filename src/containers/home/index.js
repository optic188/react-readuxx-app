import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SearchComponent from '../components/searchComponent'
import RowComponent from '../components/rowComponent'
import {
    getUserInfo,
    getAllUsersInfo,
    getAdditionalUserInfo

} from '../../actions'

class Home extends Component {
    constructor() {
        super();
        this.clickSearch = this.clickSearch.bind(this);
        this.additionalInfo = this.additionalInfo.bind(this);
        this.state = {
            openAdditianalInfo: false
        }
    }

    componentDidMount() {

    }

    clickSearch(params) {
        this.props.getUserInfo(params);
        this.setState({
            openAdditianalInfo: false
        });
        // this.props.getAllUsersInfo();
    }

    additionalInfo() {
        this.setState({
            openAdditianalInfo: !this.state.openAdditianalInfo
        }, () => {
            this.state.openAdditianalInfo && this.props.getAdditionalUserInfo(this.props.user)
        });
    }

    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <main className="mdl-layout__content main-content">
                    <div className="page-content">
                        <div className="mdl-grid mdl-grid--no-spacing">
                            {this.props.isLoading && <div className=" spinner">
                                <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
                            </div>}
                            <div className="mdl-cell mdl-cell--9-col  background search-wrapper-overflow">
                                <div className="mdl-grid search-wrapper">
                                    <SearchComponent clickSearch={this.clickSearch}/>
                                    {this.props.user && Object.keys(this.props.user).length > 0 ?
                                        <RowComponent user={this.props.user} additionalInfo={this.additionalInfo}
                                                      openAdditianalInfo={this.state.openAdditianalInfo}
                                                      userinfoAdditional={this.props.userinfoAdditional}/>
                                        :
                                        <div className="mdl-cell mdl-cell--12-col item"><p style={{marginLeft: '20px'}}>
                                            No users found </p></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    isLoading: state.isLoading,
    userinfoAdditional: state.userinfoAdditional

});

const mapDispatchToProps = dispatch => bindActionCreators({
    getUserInfo,
    getAllUsersInfo,
    getAdditionalUserInfo
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
