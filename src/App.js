import React, {Component} from 'react';
import './App.css';
import {Input} from 'antd';
import getRepos from './Backend/githubCalls'
import ResultTable from './Components/ResultTable'

const Search = Input.Search;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null,
            loading: false,
        }
    }

    /**
     * sets the state to the new user value when the button is clicked
     * @param value
     * @returns {Promise.<void>}
     */
    handleSearch = async (value) => {
        this.setState({
            loading: true
        });
        await getRepos(value, this.finishedCalls)
    };

    /**
     * sets user data after calls complete and turns of loading
     * @param userData
     */
    finishedCalls = (userData) => {
        this.setState({
            userData,
            loading: false,
        })
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <b style={{color: "black",fontSize: "12pt"}}>Enter a username for a user you'd like to see the
                        most watched repos for.</b>
                    <br/>
                    <Search
                        placeholder="Github Username"
                        onSearch={value => this.handleSearch(value)}
                        style={{width: 200}}
                    />
                    <br/>
                    <ResultTable repos={this.state.userData} loading={this.state.loading}/>
                </header>
            </div>
        );
    }
}

export default App;
