import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import  SearchBar  from './SearchBar';


const Navbar = () => (
    <Stack 
    direction="row" 
    alignItems="center"
     p={2} 
    sx={{ positions: 'sticky', top: 0, justifyContent: 'space-between',background: '#000', zIndex: 999}}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center'}}>
          <img src={logo} alt="logo" height={45} />
        </Link>

    </Stack>
  )

export default Navbar