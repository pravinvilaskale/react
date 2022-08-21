import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Radio from '@mui/material/Radio';



const MultiButton = () => {
    return (
        <div>
            <Stack spacing={4}>
                <Stack spacing={2} direction='row'>
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>
                <Stack spacing={2} direction='row'>
                    <Button variant="contained"  color="primary">primary</Button>
                    <Button variant="contained"  color="secondary">Secondary</Button>
                    <Button variant="contained" color="success">Success</Button>
                    <Button variant="contained" color="warning">Warning</Button>
                    <Button variant="contained" color="error">Error</Button>   
                </Stack>
                <Stack spacing={2} direction='row'>
                    <Button variant="contained" size="small">Small</Button>
                    <Button variant="contained" size="medium">Medium</Button>
                    <Button variant="contained" size="large">Large</Button>
                </Stack>
                <Stack spacing={2} direction='row'>
                    <ButtonGroup variant="contained" orientation='vertical' size='small' color='secondary' aria-label='alignment buttons'>
                    <Button onClick={()=>alert('Left Button Clicked')}>Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                    </ButtonGroup>
                </Stack>
                <Stack direction='row'>
                    <ToggleButtonGroup aria-label='text formatting'>
                        <ToggleButton value='bold'><FormatBoldIcon/></ToggleButton>
                        <ToggleButton value='italic'><FormatItalicIcon /></ToggleButton>
                        <ToggleButton value='underline'><FormatUnderlinedIcon /></ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
                <Stack direction='row'>
                    <Box>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <Checkbox color='error' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        <Stack direction='column'>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </div>
    )
}
export default MultiButton;