import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {addShopingCart} from '../../../../actions';
import './style.css';
import { connect } from 'react-redux';
// import { useGlobalState} from "./../../screens/Dashboard";
// import{useGlobalDispatch} from "./../../screens/Dashboard";

const useStyles = makeStyles({
  root: {
    maxWidth:260,
  },
});

 function ImgMediaCard(props) {
  const classes = useStyles();
//   let state;
//   let dispatch
//     state = useGlobalState(); 
//     dispatch=useGlobalDispatch();


    const AddCart=(product )=>{
      props.addShopingCart(product)

    //   dispatch({showFloatCart:true});
    //   const obj = state.Product.find(x => x.id === id);
    //   console.log('dd', obj.count)
    //   obj.count === undefined ? obj.count = 1
    //   : obj.count = obj.count + 1;
     
    }
  

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="334"
          
          image={"http://127.0.0.1:9000/"+props.product.Image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.product.Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.product.Price} $
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button onClick={()=>AddCart(props.product)} className="check-out" color="secondary">
           Add to cart
      </Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps =({Cart})=>({
  Cart
})
const mapDispatchToProps =(dispatch)=>({
  addShopingCart : (id) => dispatch(addShopingCart(id))
})
export default connect(mapStateToProps,  mapDispatchToProps)(ImgMediaCard)