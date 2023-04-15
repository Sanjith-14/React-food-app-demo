import { useContext , useEffect ,useState} from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted , setBtnisHighlighted] = useState(false);
  const CartCtx = useContext(CartContext);
  const {items} = CartCtx;

  const numberOfCartitems = CartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);


  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : '' }`

  useEffect(()=>{
    if(items.length === 0){
      return;
    }
    
    setBtnisHighlighted(true);

    const timer = setTimeout(() => {
      setBtnisHighlighted(false);
    }, 300);

    return ()=>{clearTimeout(timer)} //clean up function - optional
  },[items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartitems}</span>
    </button>
  );
};

export default HeaderCartButton;
