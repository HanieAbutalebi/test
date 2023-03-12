import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Search from '../movies/Search';
import MoviesList from './MoviesList';
const theme = createTheme();
export default function Home() {

  return (
    <>
      <Search />
      <MoviesList/>
    </>
    
    
  );
}















