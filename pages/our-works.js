import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import Collections from "@material-ui/icons/Collections";
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";


import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
// import work1 from "assets/img/examples/olu-eletu.jpg";
// import work2 from "assets/img/examples/clem-onojeghuo.jpg";
// import work3 from "assets/img/examples/cynthia-del-rio.jpg";
// import work4 from "assets/img/examples/mariya-georgieva.jpg";
// import work5 from "assets/img/examples/clem-onojegaw.jpg";

import profile from "assets/img/works/trucks-header.jpeg";

import work1 from "assets/img/works/1-semi-trailer mobbin.png";
import work2 from "assets/img/works/bullit.png";
import work3 from "assets/img/works/conwayfreight.png";
import work4 from "assets/img/works/work4.jpg";
import work5 from "assets/img/works/work5.png";
import work6 from "assets/img/works/work-6.jpg";
import work7 from "assets/img/works/work7.jpg";
import work7a from "assets/img/works/work7a.jpg";
import work7c from "assets/img/works/work7c.jpg";
import work8 from "assets/img/works/work8.jpg";
import work9 from "assets/img/works/work9.jpg";
import work10 from "assets/img/works/work-10.jpg";
import work11 from "assets/img/works/work-11.jpg";


import styles from "assets/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Niko Graphic Design"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={9}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Our Works</h3>
                    <h6 style={{fontSize: "1rem"}}>Graphic Design for Transportation Industry</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className="our-works-page__desc">
              <h4>
              With talented designers, smart tools and global resources, we examine the implications of every brand choice, create new experiences, and open doors to opportunity.
              From the deepest understanding of the brand’s essence and visual universe, we help our clients to communicate their values and share their vision through images, brand behavior and visual content. We use our expertise in design to put ideas into images that fuel emotion, forge brand cultures and generate value.
              </h4>
            </div>
            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12} lg={12} className={classes.navWrapper}>
              <NavPills
                color="primary"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 2 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Semi-trailers",
                    tabIcon: Dashboard,
                    tabContent: (
                      <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={8}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work6}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                    )
                  },
                  {
                    tabButton: "Trucks",
                    tabIcon: Schedule,
                    tabContent: (
                      <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={work7}
                              className={navImageClasses}
                              />
                            <img
                              alt="..."
                              src={work7a}
                              className={navImageClasses}
                            />

                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                          <img
                              alt="..."
                              src={work7c}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                    )
                  },
                  {
                    tabButton: "Pick-up trucks",
                    tabIcon: Palette,
                    tabContent: (
                      <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={work8}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work9}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work10}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                    )
                  },
                  {
                    tabButton: "Vans",
                    tabIcon: Palette,
                    tabContent: (
                      <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>

                          </GridItem>
                        </GridContainer>
                    )
                  },
                  {
                    tabButton: "On interior",
                    tabIcon: Palette,
                    tabContent: (
                      <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>

                          </GridItem>
                        </GridContainer>
                    )
                  },
                  {
                    tabButton: "On exterior",
                    tabIcon: Palette,
                    tabContent: (
                      <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>

                          </GridItem>
                        </GridContainer>
                    )
                  },

                ]}
              />
            </GridItem>

            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
