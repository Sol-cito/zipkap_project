import React from 'react';
import SearchResult from './SearchResult';
import './Style.css'


function SearchBar() {
    return (
        <div>
            {/*  관련하여 https://ko.reactjs.org/docs/forms.html 참고할 것 */}
            <form onSubmit = {SearchResult}>
                <input
                    type='text'
                    placeholder='집을 검색해라'
                ></input>
                <button type = 'submit'>
                    검색
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
