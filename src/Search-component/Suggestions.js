import React from 'react';

const Suggestions = (props) => {
    if (props.isSearched) {
        if (props.results && props.results.length > 0) {
            const options = props.results.map(res => (
                <li key={res.id}>
                    {res.name}
                </li>
            ))
            return <ul>{options}</ul>   
        }
        return <p>No result found</p>
    } else {
        return <p>Please start typing to get result...</p>
    }
}

export default Suggestions;