import React from 'react';
const SearchBox =({searchfiled,searchChange})=>{
return(
<input className='pa3 ba b--green bg-lightest-blue'
  type='search'  onChange={searchChange} placeholder= 'Search Here' />
);
}
export default SearchBox;
