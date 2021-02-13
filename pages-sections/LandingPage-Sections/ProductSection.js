import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
          We will just say it – we are experts in custom vinyl graphics for commercial vehicle fleets.

          We offer full-service package – unique and outstanding design, high quality print and impeccable wrapping and application on the vehicle.
          We design for the future. We give your brand the IDENTITY it needs to accomplish your goals!

          Vinyl graphics and lettering for your vehicles are the best and most cost-effective way to make an impression on potential customers, make your brand known and MAKE YOUR BRAND WORK. Now more than ever!
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Expressive Designing"
              description="
              With talented designers, smart tools and global resources, we examine the implications of every brand choice, create new experiences, and open doors to opportunity.
              From the deepest understanding of the brand’s essence and visual universe, we help our clients to communicate their values and share their vision through images, brand behavior and visual content. We use our expertise in design to put ideas into images that fuel emotion, forge brand cultures and generate value.

              Our service is – Beyond Expectations.
              We are determined to excel in every project and take every client’s brand beyond the expected, to a territory only the ambitious will reach."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="World-Class Print"
              description="Our mission is to produce the highest caliber print possible. We continually invest in the best equipment and top talent in the industry to deliver on that promise and agreed. We are capable of producing almost anything you can imagine on-site – decals, poster prints, large scale wall graphics, vehicle and trailer wraps, to name a few.
                          We are committed to environmental protection and conservation. We are sourcing products through suppliers who focus on sustainability and we’re constantly seeking the latest “green” technology and materials. We’re also dedicated to volunteering and charitable giving within our community."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Impecable Application And Instalation"
              description="Wrapping vehicles, whether it’s a car, truck, van, RV, bus, or commercial yacht/boat, requires a significant amount of skill and knowledge. Since these vehicles travel long distances and create the first and last impression when arriving and leaving, the wrap must be installed with care and skill in order to last the length of the campaign.

              We will fuel your marketing messages and brand image. Our team of professional graphic installers and project managers offer your business the level of service and quality of graphics installation and sign installation that you need, meaning the best in the industry.

              We have a team of wrap installers that are among the highest-level professionals in the business.  Our team has gone through extensive training on the proper methods to prepare, size, cut and apply graphics to vehicles. We are here to ensure that you will get the best service in the industry in a timely and fashionable manner. "
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
