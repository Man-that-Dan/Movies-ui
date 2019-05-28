import React from 'react';
import { render } from 'react-dom';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { MovieList, MovieEdit, MovieCreate, MovieIcon } from './movies';


const App = () => (
        <Admin dataProvider={simpleRestProvider('https://cors-anywhere.herokuapp.com/https://krw-technical-test.herokuapp.com/')}>
         <Resource name="movies" list={MovieList} edit={MovieEdit} create={MovieCreate} icon={MovieIcon}/>
          </Admin>

            );


export default App;
