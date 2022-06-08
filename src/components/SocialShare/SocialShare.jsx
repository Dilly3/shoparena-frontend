import React, { useState, useEffect } from 'react'
import {Container, Segment} from "semantic-ui-react"
import {FacebookShareButton, WhatsappShareButton, LinkedinShareButton, TwitterShareButton } from "react-share"
import {FacebookIcon, WhatsappIcon, LinkedinIcon, TwitterIcon} from "react-share"
import axios from 'axios'

const token = localStorage.getItem("token");

export default function SocialShare({social_id}) {
    
      const [sellers, updateSellers] = useState(null);
      
      async function fetchSellers() {
        // const { ID, price, image, title } = product;
        try {
          const response = await axios.get(
            `https://oja-ecommerce.herokuapp.com/api/v1/sellers`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

    
          updateSellers(response.data.Sellers);
        } catch (error) {
          console.log("Errors", error);
        }
      }
    
      useEffect(() => {
        fetchSellers();
      }, []);
    


  return (
    <>
    <Container >
        <Segment className="share-btn-container">
            <FacebookShareButton title='Share this store with friends' url={`https://shoparena-frontend-phi.vercel.app/seller/shop/${social_id}`} quote={"Checkout my Store on Oja!"} hashtag="#oja">
                <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
            </FacebookShareButton>

            <WhatsappShareButton title='Share this store with friends' url={`https://shoparena-frontend-phi.vercel.app/seller/shop/${social_id}`} quote={"Checkout my Store on Oja!"} hashtag="#oja">
                <WhatsappIcon logoFillColor="white" round={true}>
                </WhatsappIcon>
            </WhatsappShareButton>

            <LinkedinShareButton title='Share this store with friends' url={`https://shoparena-frontend-phi.vercel.app/seller/shop/${social_id}`} quote={"Checkout my Store on Oja!"} hashtag="#oja">
                <LinkedinIcon logoFillColor='white' round={true}>
                </LinkedinIcon>
            </LinkedinShareButton>

            <TwitterShareButton  title='Sharing this store with friends' url={`https://shoparena-frontend-phi.vercel.app/seller/shop/${social_id}`} quote={"Checkout my Store on Oja!"} hashtag="#oja">
                <TwitterIcon logoFillColor='white' round={true}>
                </TwitterIcon>
            </TwitterShareButton>
        </Segment>
    </Container>
    </>
  )
}
