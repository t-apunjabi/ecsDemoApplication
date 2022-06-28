import React from 'react';
import TextField from "@mui/material/TextField"; 
//import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

class SearchBar extends React.Component<{}, {}>{
    render() {
        return (
            <div className='searchBar' style={{ position: 'relative'}}>

                <TextField
                   margin="none"
                    
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    {/*<SearchIcon />*/}
                </IconButton>
                
            </div>
        );
    }
}

export default SearchBar;