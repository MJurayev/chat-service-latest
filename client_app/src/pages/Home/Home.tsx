import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import MyButton from "../../common/Button/Button";
import Ripple from "../../common/Ripple/Ripple";

export default function Home() {
    
    
    return (
        <div>
            {/* <Link to="/chat"> */}
                <Button variant="contained">Chatga o'tish </Button>
                
            {/* </Link> */}
            <MyButton variant="danger">Salom</MyButton>
        </div>
    )
}
