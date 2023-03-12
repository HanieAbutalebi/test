import React from "react";
import { selectSearchResults } from "./slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Card, Grid, Typography, Box, CardContent,CardMedia } from "@mui/material";
import useStyles from '../../styles'
const SearchList = () => {
    const classes = useStyles();
    const searchList = useAppSelector(selectSearchResults);
    
    return (
        <>
            <Box>
                {searchList?.map((item, index) => (
                    <Box key={index} sx={{m:'30px auto'}}>
                        <Card sx={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px'}}>
                            <Box sx={{ display: 'flex', flexDirection: 'column',align:'start' ,alignContent:'flex-start' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography>
                                    <a className={classes.link} href={item.web_link}>
                                        {item.title}
                                    </a>
                                    </Typography>
                                    <Typography sx={{textAlign:'left'}} component="div" variant="p" color='text.primary'>
                                        {item.description}
                                        </Typography>
                                </CardContent>
                            </Box>
                            <CardMedia
                              component="img"
                              sx={{ width: 151 }}
                              image={item.thumbnail}
                            />
                            
                        </Card>
                    </Box>
                ))}
            </Box>
        </> 
    );
}

export default SearchList;