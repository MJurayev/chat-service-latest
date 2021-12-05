import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
    
    
    return (
        <div>
            <Link to="/chat">
                <Button variant="contained">Chatga o'tish </Button>
            </Link>
        </div>
    )
}
