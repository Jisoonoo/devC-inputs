import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import './App.css';
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';

const defaultStack = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '20px'
}

function App() {
  return (
    <div className="App">
      <h1>Inputs</h1>
      <Stack direction='row' spacing={2} sx={defaultStack}>
        <TextField label='Default' variant='outlined'/>
        <TextField error label='Error' variant='outlined'/>
        <TextField disabled label='Disabled' variant='outlined'/>
      </Stack>
      <TextField label='Helper text' variant='outlined' helperText='Some help text' sx={{marginBottom: '20px'}}/>
      <Stack direction='row' spacing={2} sx={defaultStack}>
        <TextField label="Start Icon" variant='outlined'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircleIcon/>
              </InputAdornment>
          )
        }}/>
        <TextField label="End Icon" variant='outlined'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <VisibilityIcon/>
              </InputAdornment>
          )
        }}/>
      </Stack>
      <Stack direction='row' spacing={2} sx={defaultStack}>
        <TextField label='Small' size='small' variant='outlined'/>
        <TextField label='Medium' variant='outlined' sx={{
          transform: 'scale(0.9)'
        }}/>
        <TextField label='Large' variant='outlined'/>
      </Stack>
      <Stack direction='row' spacing={2} sx={defaultStack}>
        <TextField label='Default' color='primary' variant='outlined'/>
        <TextField label='Warning' color='warning' variant='outlined' />
        <TextField label='Secondary' color='secondary' variant='outlined'/>
        <TextField label='Success' color='success' variant='outlined'/>
      </Stack>
      <Stack direction='row' spacing={2} sx={defaultStack}>
        <TextField label='Full width' variant='outlined' fullWidth/>
      </Stack>
      <Stack direction='row' spacing={2} sx={defaultStack}>
        <TextField label='Multiline' variant='outlined' multiline minRows={3}/>
      </Stack>
      <Stack direction='row' spacing={2} sx={defaultStack}>
        <TextField label='Hover me!' variant='outlined' sx={{
          transition: '1s',
          '&:hover': {
            transform: 'scale(1.1)'
          },
        }}/>
      </Stack>
    </div>
  );
}

export default App;
