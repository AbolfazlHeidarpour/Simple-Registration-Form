import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {useState} from "react";

const WelcomePage = ({userName}) => {
  const [alertOpen, setAlert] = useState(true);

  const onClose = () => setAlert(false);

  return (
    <>
      <Snackbar
        autoHideDuration={5000}
        onClose={onClose}
        open={alertOpen}
      >
        <Alert
          severity='success'
          onClose={onClose}
          variant='filled'
        >
          Registration was successful!
        </Alert>
      </Snackbar>
      <Typography variant='h3'>
        Welcome {userName}
      </Typography>
    </>
  );
};

export default WelcomePage;