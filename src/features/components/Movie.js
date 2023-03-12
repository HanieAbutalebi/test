import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getMovieWithSaga } from '../movies/actions';
import { Typography, Button } from '@mui/material';
import { selectSingleMovie } from '../movies/slice';
import useStyles from '../../styles'
export default function Movie() {
  const dispatch = useAppDispatch();
  const { movie } = useAppSelector(state => ({...state.movie}));
  const classes = useStyles();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMovieWithSaga(id))
  },[id])
  return (
    <section className={classes.section}> 
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <Typography align='left' variant='h3' gutterBottom component='h2'>
          {movie.Title}
        </Typography>
        <Typography align='left' variant='h5' gutterBottom component='h5'>
          Year: {movie.Year}
        </Typography>
        <Typography align='left' variant='body1' gutterBottom component='p'>
          {movie.Plot}
        </Typography>
        <Typography align='left' variant='h6' gutterBottom component='h6'>
          Director: {movie.Director}
        </Typography>
        <Button variant='contained' onClick={() =>navigate("/")}>Go back</Button>
      </div>
    </section>
  );
}















