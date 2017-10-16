import React  from 'react';
import ShowCard from './ShowCard'
import preload from '../data.json';

const Search = () => (
  <div className="search">
    {/* print data.json */}
    {/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}
    <div>
      {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);

export default Search;
