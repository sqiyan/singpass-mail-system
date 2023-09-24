import React, {useEffect, useState} from 'react'
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';

import './style.scss'

const Modal = (props) => {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Are you sure you want to return to the home page?</DialogTitle>
            <DialogActions>
                <Button onClick={() => handleClose("Yes")}>Yes</Button>
                <Button onClick={() => handleClose("No")}>No</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal
