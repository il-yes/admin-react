import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Button} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import {requests} from '../components/requests-api';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    margin: '20px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
let fetchUrl = requests.corporateList

export default function SearchField() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('')
  const history = useHistory();


    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handlerSearch = e => {
        e.preventDefault()
        if(!searchTerm) return 
        return history.push(`${fetchUrl}?name=${searchTerm}`)
    }


  return (
      
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handlerSearch} >
            <TextField
                placeholder="Corporate name"
                onChange={handleChange}
                value={searchTerm}
            />
            <Button type="submit" variant="contained" color="primary">
                search
            </Button>
        </form>
  );
}
