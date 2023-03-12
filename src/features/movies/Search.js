import React, { useState,useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { TextField } from '@mui/material';
import useStyles from '../../styles';
import { getMovies,selectMovie } from './slice';
import { searchResultWithSaga } from './actions'
const Search = () => {
    const [newname, setNewname] = useState("spider");
    const classes = useStyles();
    const { moviesList: { Error: error } } = useAppSelector(state => ({...state.movie}))
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(searchResultWithSaga( newname ));
        console.log(searchResultWithSaga( newname ))
    }, [newname]);
    return (
        <>
            <h2 className={classes.title}>Movie search app</h2>
            <form className={classes.form} onSubmit={e => e.preventDefault()}>
                <TextField type='text'
                    fullWidth
                    value={newname}
                    sx={{ m: 1, width: '55ch' }}
                    onChange={e => setNewname(e.target.value)}
                />
                {error && <p className={classes.error}>{error}</p>}
            </form>
        </>
    )
}

export default Search;