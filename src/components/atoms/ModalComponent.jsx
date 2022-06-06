import React from 'react';
import { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';

const ModalComponent = (props) => {
	const [open, setOpen] = useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };
    
  const handleOpen = () => {
    setOpen(true);
  };
  return (
	<div style={{ display: 'block', padding: 30 }}>
      <button type="button" 
      onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        onClose={handleClose}
        open={open}
        style={{
          position: 'absolute',
          border: '2px solid #000',
          padding:10,
          paddingRight:20,
          backgroundColor: 'white',
          boxShadow: '2px solid white',
          height:450,
          width: 400,
          margin: 'auto'
          // overflowY: 'auto',    
          // overflowX: 'auto'
        }}
      >
        <div>
        <Grid container spacing={0}>
          <Grid item md={11} lg={11} sm={11} xs={11}>
            <h3>{props.title}</h3>
          </Grid>
          <Grid item md={1} lg={1} sm={1} xs={1}>
          <CloseIcon onClick={handleClose} />
          </Grid>
        </Grid>
        {/* <h2>{props.title}</h2>
        <CloseIcon onClick={handleClose} /> */}
        {props.children}
        </div>
      </Modal>
    </div>
  )
}

export default ModalComponent
