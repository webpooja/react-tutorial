import { connect } from "react-redux";
import Home from "../Component/Home";
import { addToCart,removeToCart } from "../Service/Action/action";

const mapSateToProps=state=>({
   data:state.cardItems
})

const mapDispatchToProps=(dispatch)=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:(data)=>dispatch(removeToCart(data))
})

export default connect(mapSateToProps,mapDispatchToProps)(Home)
//export default Home;