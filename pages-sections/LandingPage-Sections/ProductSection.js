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
          <h3 className={classes.description}>
          We Visualize Your Identity. How Your Brand Looks. Speaks. Feels. Empowers.
          </h3>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Expressive Designing"
              description="
              From the deepest understanding of the brand’s essence and visual universe, we help our clients to communicate their values and share their vision through images, brand behavior and visual content. We use our expertise in design to put ideas into images that fuel emotion, forge brand cultures and generate value.

              "
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="World-Class Print"
              description="Our mission is to produce the highest caliber print possible.
                          We continually invest in the best equipment and top talent in the industry to deliver on that promise and agreed. We are capable of producing almost anything you can imagine on-site – decals, poster prints, large scale wall graphics, vehicle and trailer wraps, to name a few.
                          "
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Impecable Application And Instalation"
              description="
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
