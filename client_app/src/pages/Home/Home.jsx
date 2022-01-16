import { Button } from "@mui/material";
import MyButton from "../../common/Button/Button";
import { Link } from 'react-router-dom'
export default function Home() {
    
    
    return (
        <div>
            <Link to="/chat">
                <Button variant="contained">Chatga o'tish </Button>
            </Link>
            <MyButton variant="danger">Salom</MyButton>
        </div>
    )
}
