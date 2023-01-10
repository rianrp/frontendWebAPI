import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, useMediaQuery } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Cards(props) {
  const theme = useTheme();
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [products, setProducts] = useState(props.allProducts);

  return (
    <>
      {products.map((item) => (
        <Grid item xs={fullScreen?12:4} style={{ padding: 5 }}>
          <Card className={classes.root} variant="outlined" key={item.id}>
            <CardContent>
              <img src={item.image} width={200}></img>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {item.name}
              </Typography>
              <Typography variant="h5" component="h2">
                {item.category}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Preço
              </Typography>
              <Typography variant="body2" component="p">
                {item.price}
                <br />
                {item.quantity} caixas
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
}
