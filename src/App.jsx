import Search from './components/search/Search';
import Forcast from './components/forcast/Forcast';
import Current from './components/current/Current';
import './App.css';
import { useState } from 'react';

const App = () => {

  const [searchValue, setSearchValue] = useState(null);

  let lat = 0;
  let lon = 0;

  function handleOnSearchChange(searchData){
    setSearchValue(searchData);
  }

  if(searchValue){
    lat = searchValue.value.split(" ")[0];
    lon = searchValue.value.split(" ")[1];
  }
  

  return (
    <div className='container'>  
      <Search onSearchChange={handleOnSearchChange} />
      <Current lat={lat} lon={lon} />
      <Forcast />
    </div>
  );
}

export default App;
