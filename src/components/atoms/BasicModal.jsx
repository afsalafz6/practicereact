import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Modal from '@mui/material/Modal';
import { Grid } from '@material-ui/core';
import { PropTypes } from "prop-types";
import ButtonAtom from './ButtonAtom';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: ${width}%;
// //   width: 400,
//   bgcolor: 'background.paper',
// //   border: '2px solid #000',
//   boxShadow: 12,
//   p: 4,
//   borderRadius: '6px'
// };

export default function BasicModal(props) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: props.width,
      //   width: 400,
        bgcolor: 'background.paper',
      //   border: '2px solid #000',
        boxShadow: 12,
        p: 4,
        borderRadius: '6px'
      };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{props.buttonName}</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
        <div>
        <Grid container spacing={0}>
          <Grid item md={11} lg={11} sm={11} xs={11}>
            <h2 style={{font:"Roboto" ,size:"24px"}}>{props.title}</h2>
          </Grid>
          <Grid item md={1} lg={1} sm={1} xs={1}>
          <CloseIcon onClick={handleClose} />
          </Grid>
        </Grid>
        {/* <h2>{props.title}</h2>
        <CloseIcon onClick={handleClose} /> */}
        {props.children}
        <Grid
          container
          spacing={0}
          style={{ display: "flex", justifyContent: "right" }}
        >
          <ButtonAtom
            background="white"
            color="black"
            text="Cancel"
            onClickFn={handleClose}
          />
          <ButtonAtom text={props.btnText} />
        </Grid>
        </div>
        </Box>
      </Modal>
    </div>
  );
}
BasicModal.propTypes = {
    width:PropTypes.number,
  };
  BasicModal.defaultProps = {
    width:400,
  };
