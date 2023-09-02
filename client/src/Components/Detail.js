import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from "../Images/Photo.jpg"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Detail = () => {

   const { id } = useParams("")
   console.log(id);
   const [getUserData, setUserData] = useState([])
   console.log(getUserData);

   const navigate=useNavigate()

   const getData = async () => {
      const res = await fetch(`/getuser/${id}`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json"
         },
      })

      console.log(res)
      const datas = await res.json()
      console.log(datas)

      if (res.status === 422 || !getUserData) {
         console.log("error");
      }
      else {
         setUserData(datas)
         console.log("Get Data");
      }
   }

   useEffect(() => {
      getData()
   }, [])

   const deleteUser=async(id)=>{
      const res2=await fetch(`/deleteUser/${id}`,{
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          }
      })

      const deleteData=await res2.json()
      console.log(deleteData);

      if(res2.status===422 || !deleteData){
          console.log("error");
      }else{
          console.log("user deleted successfully");
          navigate('/')
      }
  }


   return (
      <div className="container mt-3">

         <h1>Hello {`${getUserData.name}`} Welcome!!</h1>

         <Card sx={{ maxWidth: 600 }}>
            <CardContent>
               <div className="add_btn mx-4">
                 <NavLink to={`/edit/${getUserData._id}`}> <button className="btn btn-primary"><i class="fa-solid fa-pen-nib"></i></button> </NavLink> 
                  <button className="btn btn-danger"  onClick={()=>deleteUser(getUserData._id)} >Delete</button>
               </div>
               <div className="row">
                  <div className="left_view col-lg-6 col-md-6 col-12">
                     <img src={Image} style={{ width: 50 }} alt="profile" />
                     <h3 className="mt-3">Name: <span >{getUserData.name}</span></h3>
                     <h3 className="mt-3">Age: <span >{getUserData.age}</span></h3>
                     <p className="mt-3">< MailOutlineIcon />Email: <span>{getUserData.email}</span></p>
                     <p className="mt-3"><WorkIcon />Occuption: <span>{getUserData.work}</span></p>
                  </div>
                  <div className="right_view  col-lg-6 col-md-6 col-12">

                     <p className="mt-5"><SendToMobileIcon />mobile: <span>{getUserData.mobile}</span></p>
                     <p className="mt-3"><AddLocationAltIcon />location: <span>{getUserData.address}</span></p>
                     <p className="mt-3"><DescriptionIcon /><span>{getUserData.description}</span></p>
                  </div>
               </div>

            </CardContent>
         </Card>

      </div>
   )
}
export default Detail