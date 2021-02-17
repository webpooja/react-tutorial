import { connect } from "react-redux";
import Header from "../Component/Header";


const mapSateToProps=state=>({
   data:state.cardItems
})

const mapDispatchToProps=()=>({
    
})

export default connect(mapSateToProps,mapDispatchToProps)(Header)
//export default Home;