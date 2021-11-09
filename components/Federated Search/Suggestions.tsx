import React from 'react';
import { connectHits, Highlight } from 'react-instantsearch-dom';

import {useVisibility} from '../../contexts/visibilityContext'

// import { useDispatch } from 'react-redux';

// import { getQuery } from '../../actions/getQuery';

// UNIQBY LIB
// import uniqBy from 'lodash.uniqby';
// import {
//     federatedSearchVisible,
//     searchVisible
// } from '../../actions/visibility';

type HitsProps = {
    hits: any[];
  };

const Suggestions = ({ hits }: HitsProps) => {
    const { setfederatedSearchVisible } = useVisibility();
    // const dispatch = useDispatch();
    // const unique = uniqBy(hits, 'ProductTypeDesc');
    return (
        <div className="suggestions-container">
            {hits.map((hit, index) => {
                console.log(hit)
                return (
                    <div
                        key={index}
                        className="suggestion"
                        onClick={e => {
                            // dispatch(getQuery(hit.query));
                            // dispatch(searchVisible(true));
                            // dispatch(federatedSearchVisible(false));
                            setfederatedSearchVisible(false)
                        }}
                    >
                         <Highlight hit={hit} attribute="query" key={index}  />
                    </div>
                );
            })}
        </div>
    );
};

const CustomSuggestions = connectHits(Suggestions);

export default CustomSuggestions;
