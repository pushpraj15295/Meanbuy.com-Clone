import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const SinglePage = () => {
    const {id} = useParams()
  const {card,AddToCard,RemoveToCard,cardData} = useContext(AppContext);
  // console.log("carddata",cardData);
  return (
    <Flex>
      <br />
        <Box width="40%" border="0.5px solid lightgray">
            <Box marginLeft="20"><img width="500" height="500" src={cardData.image} alt={cardData.id} /></Box>
          
        </Box>
         <Box width="60%" border="0.5px solid lightgray" height="auto">
             <Box margin="20">
             <Text fontSize="30"> <b>{cardData.name}</b> </Text>
             <br />
              <Text>
                <button style={{backgroundColor:"red",color:"white",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px"}}>{cardData.rating} ☆☆☆</button>
              </Text>
              <br />
             <Flex> <Box><Text fontSize="32"> <b> ₹ {cardData.price}</b> </Text></Box>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Box marginTop="20px" > <Text color="rgb(60,193,1)">{cardData.off}</Text></Box> </Flex>
             <br />
             <Box  > <Text color="rgb(60,193,1)"> <u>CASH ON DELIVERY available on orders between ₹999 and ₹ 10,000</u> </Text></Box>
             <Box marginTop="20px" > <Text>Get up to ₹500 OFF with coupon code <u> <b>PREPAID</b> </u> 3 intrest free payments with simpt</Text></Box>
             </Box>
             <Box marginLeft="20"><Button disabled={card === 0} onClick={RemoveToCard}>-</Button>&nbsp;&nbsp;<Button>{card}</Button>&nbsp;&nbsp;<Button onClick={AddToCard}>+</Button></Box>
             <br />
             <Box marginLeft="20"><Button onClick={AddToCard}colorScheme='green' >ADD TO CARD</Button> &nbsp;&nbsp; &nbsp;&nbsp;<Button onClick={RemoveToCard} colorScheme='twitter' disabled={card === 0}>REMOVE TO CARD</Button></Box>
         </Box>
    </Flex>
  )
}

export default SinglePage