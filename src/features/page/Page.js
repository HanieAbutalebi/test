import * as React from 'react';
import SearchList from './SearchList';
import { useAppDispatch } from '../../app/hooks';
import { sendUserInputWithSaga } from './actions';
import { useState } from 'react';
import { Box, Container, TextField,Grid, Typography, Button } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from '@mui/material/InputAdornment';
import logo from '../../images/logo.png';
const Page = () => {
  const dispatch = useAppDispatch()
  const [userInput, setUserInput] = useState('');
  // const [pageNumber, setPageNumber] = useState(1);
  let pageNumber = 1;
  const increasePages = () => {
    pageNumber += 1;
    dispatch(sendUserInputWithSaga({userInput,pageNumber}))
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(sendUserInputWithSaga({ userInput, pageNumber}));
  }
  return (
    <> 
      <Container
        sx={{
        marginTop: '30px',
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
      <Box component='form'>
        <TextField
          sx={{
            height:'30px',
            mr:'40px',
            borderRadius: '30px',
            width: '600px',
            textAlign: 'right',
            boxShadow: '0 1px 0 0 rgba(170,170,170,0.01)'
          }}
          placeholder="جستجو کنید"
          type="text"
          variant="outlined"
          size="small"
          align='right'
          value={userInput}
          onChange={e =>setUserInput(e.target.value)}
          InputProps={{

            endAdornment: (
              <InputAdornment onClick={submitHandler}
                position="start">
                <SearchIcon/>
              </InputAdornment>
            ),
          }}
        />
        </Box>
        <Grid sx={{ display: 'flex', flexDirection: 'horizental' }} alignItems='center' >
        <Typography variant='h2' component='h2' sx={{fontSize:'20px',fontWeight:'bold'}}>‌ذره بین</Typography>

          <Box
          component="img"
          sx={{
            height: 50,
            width: 50,
            alignItems:'center',
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="logo"
          src={logo}
          />
        </Grid>
      </Container>
      <SearchList />
      <Button onClick={increasePages}>next page</Button>

    </>
  );
}
export default Page;














