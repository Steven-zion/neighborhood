import React from "react";
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './main'

export default function Header() {
    const classes = useStyles()

    return (
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Neighborhood
          </Typography>
          <Box display="flex">
            <Typography variant="h6" className={classes.title}>
              Explore Your Current Location
            </Typography>
            <Autocomplete>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase placeholder="search..." classes={{root: classes.inputRoot, Input: classes.inputInput}} />
                </div>
            </Autocomplete>
          </Box>
        </Toolbar>
      </AppBar>
    );
}