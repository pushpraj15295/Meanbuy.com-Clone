import { Box, Button, Input, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import styles from "./Footer.module.css";
import contest from "../Image/contest.png";
const Footer = () => {
  return (
    <Box className={styles.footer} >
      <Box width="88%" margin="auto" backgroundColor="rgb(242,242,242)">
        <br />
        <SimpleGrid columns={[1, 2, 3, 4, 5]}>
          <Box>
            <h2>OUR POLICIES</h2>
            <br />
            <ul>
              <p>
                <a href="https://www.meanbuy.com/precautions">
                  Covid-19 Precautions
                </a>
              </p> <br />
              <p>
                <a href="https://www.meanbuy.com/about/our_promise">
                  Our Promise
                </a>
              </p> <br />
              <p>
                <a href="https://www.meanbuy.com/terms/terms_and_conditions">
                  Terms &amp; Conditions
                </a>
              </p><br />
              <p>
                <a href="https://www.meanbuy.com/customs">
                  Customs tariffs and fees
                </a>
              </p><br />

              <p>
                <a href="https://www.meanbuy.com/terms/privacy">
                  Privacy Popcy
                </a>
              </p><br />
            </ul>
          </Box>
          <Box>
            <h2>CORPORATE</h2>
            <br />
            <ul>
              <p>
                <a href="https://www.meanbuy.com/merchant/signup">
                  Sell With Us
                </a>
              </p><br />
              <p>
                <a href="https://www.meanbuy.com/careers">
                  Career Opportunities
                </a>
              </p><br />
              <p>
                <a href="https://www.meanbuy.com/blog">Our Blog</a>
              </p><br />

              <p>
                <a href="https://www.meanbuy.com/sitemap">Sitemap</a>
              </p><br />
            </ul>
          </Box>
          <Box>
            <h2>HELP</h2>
            <br />
            <ul>
              <p>
                <a href="https://www.meanbuy.com/howitworks">
                  How MeanBuy Works
                </a>
              </p><br />
              <p>
                <a href="https://www.meanbuy.com/account/my_orders">
                  My Orders
                </a>
              </p><br />
              <p>
                <a href="https://www.meanbuy.com/shipping_return/returns">
                  Exchanges, Returns and Refunds
                </a>
              </p><br />
              <p>
                <a href="https://www.meanbuy.com/contact">Contact Us</a>
              </p><br />
              <p>
                <a href="https://www.meanbuy.com/faq">FAQ</a>
              </p><br />
            </ul>
          </Box>
          <Box>
            <h2>SELL WITH US</h2>
            <br />
           <p> <a href="https://www.meanbuy.com/sell">General Information</a> </p>
            <br />
            <p> <a href="https://www.meanbuy.com/merchant/signup">Signup</a></p><br />
          </Box>
          <Box>
            <Input width="40" type="text" placeholder="Your email Addresh" /><Button color="white" backgroundColor="rgb(243,153,50)">Subscribe</Button>
            <br /><br />
            <img src={contest} alt={contest} style={{width:320,height:300,cursor:"pointer"}} />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Footer;
