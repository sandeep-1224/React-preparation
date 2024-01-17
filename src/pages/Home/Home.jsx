import React from "react";
import "./Home.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Helps from "../Helps/Helps";
// import ReusedComponent from "./ReusedComponent";

function Home() {
  // const classes = useStyles()

  
  return (
    <>
      <div className="grid-service1">
      
      <div className="card-grid">
      <Card className="" sx={{ maxWidth: 345}}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/About_Right.jpg"
        title="green iguana"
        />
      <CardContent>
        <Typography sx={{fontWeight:'bold'}} gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography sx={{fontFamily:'italic'}} variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="custom-style"  sx={{ fotSize:'40px',color:'white',width:'20px',height:'auto',backgroundColor:"green",padding:'10px' ,'&:hover':{backgroundColor:'blue'}}}>Share</Button>
        <Button className="custom-style1" sx={{fotSize:'40px',color:'white',width:'30px',height:'auto',backgroundColor:"green"}} size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
        </div>

        
{/* <ReusedComponent label="Bholenath"/> */}

    </>
  );
}

export default Home;