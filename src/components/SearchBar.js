import React from 'react';
import './SearchBar.css'
class SearchBar extends React.Component {
    state = {term: ''};

    onInputChange = e =>{
        this.setState({term: e.target.value});
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <div className="ui grid">
                            <div className="ui row">
                                <div className="logo">You<span>Tube</span></div>
                                <input
                                    className="thirteen wide column"
                                    type="text"
                                    value={this.state.term}
                                    onChange={this.onInputChange}
                                    placeholder="input search text and press enter"
                                />
                                <button className="search-button ui primary button one wide column">
                                    <i className="search icon"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;