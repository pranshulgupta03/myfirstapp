import React from 'react'
import BComponent from './BComponent';
import DataContext from './DataContext';

const AComponent = () => {

    const Vasihatnama = "mera grand children ko 4,00,000cr mai bhet waroop deta hoon";

  return (
    <DataContext.Provider value={Vasihatnama}>
        <div>
            AComponent
            <BComponent/>
        </div>
    </DataContext.Provider>
  )
}

export default AComponent
