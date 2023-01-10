import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Enums } from "../../components/enums";
import USelect from "../../components/uselect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ModalAddProducts(props) {
  const theme = useTheme();
  const [category, setCategory] = React.useState("");
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const categories = [{
    value: Enums.category.celular,
    label: 'Celular'
}, {
    value: Enums.category.notebook,
    label: 'Notebook'
}, {
    value: Enums.category.fone,
    label: 'Fone'
}, {
    value: Enums.category.teclado,
    label: 'Teclado'
}, {
    value: Enums.category.monitor,
    label: 'Monitor'
}, {
    value: Enums.category.outros,
    label: 'Outros'
}]
  const classes = useStyles();

  const handleClickOpen = () => {
    props.setOpenModal(true);
  };

  const handleClose = () => {
    props.setOpenModal(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={props.openModal}
        onClose={handleClose}
        fullWidth={"md"}
        maxWidth={"md"}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={12}>
            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={8}>
              <USelect
                {...{
                  itens: categories,
                  value: category,
                  setValue: setCategory,
                  label: "Categoria ",
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
