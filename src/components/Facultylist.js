import React, { useContext } from 'react';


//import context
import { UtccContext } from './UtccContext';

//import components
import Faculty from './Faculty';

//import link
import { Link } from 'react-router-dom';

// import icons
import {} from 'react-icons/im';

const Facultylist = () => {
  const { houses } = useContext(UtccContext);

  
  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house, index)=> {
            return(
              <Link to={`/property/${house.id}`}key={index}>
                <Faculty house={house}/>
              </Link>
            )
          }
        )}
        </div>
      </div>
    </section>
  );
};

export default Facultylist;