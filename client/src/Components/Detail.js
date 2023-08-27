import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from "../Images/Photo.jpg"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import { NavLink } from "react-router-dom";

const Detail = () => {

   console.log("running")
   return (
      <div className="container mt-3">

         <h1>Hello Nitin Kaplas Welcome!!</h1>

         <Card sx={{ maxWidth: 600 }}>
            <CardContent>
            <div className="add_btn mx-4">
                        <button className="btn btn-primary"><i class="fa-solid fa-pen-nib"></i></button>
                        <button className="btn btn-danger">Delete</button>
                     </div>
               <div className="row">
                  <div className="left_view col-lg-6 col-md-6 col-12">
                     <img src={Image} style={{ width: 50 }} alt="profile" />
                     <h3 className="mt-3">Name: <span >Nitin Kaplas</span></h3>
                     <h3 className="mt-3">Age: <span >25</span></h3>
                     <p className="mt-3">< MailOutlineIcon />Email: <span>nitinkaplas@</span></p>
                     <p className="mt-3"><WorkIcon />Occuption: <span>Engineer</span></p>
                  </div>
                  <div className="right_view  col-lg-6 col-md-6 col-12">
                     
                     <p className="mt-5"><SendToMobileIcon />mobile: <span>+918837700899</span></p>
                     <p className="mt-3"><AddLocationAltIcon />location: <span>Punjab</span></p>
                     <p className="mt-3"><DescriptionIcon /><span>All Gud</span></p>
                  </div>
               </div>

            </CardContent>
         </Card>

      </div>
   )
}
export default Detail