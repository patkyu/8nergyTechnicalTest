import React from 'react';

import Image2Image from '/components/image.png';

import Features03Image021Image from "/components/landing-page.png";

import {
  styled
} from '@mui/material/styles';

const Desktop11 = styled("div")({
  backgroundColor: `rgba(21, 23, 25, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1440px`,
  height: `1820px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Image2 = styled("img")({
  height: `149px`,
  width: `170px`,
  position: `absolute`,
  left: `48px`,
  top: `0px`,
});

const SignIn = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(93, 93, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `109px`,
  height: `41px`,
  position: `absolute`,
  left: `1086px`,
  top: `54px`,
});

const Rectangle1 = styled("div")({
  backgroundColor: `rgba(93, 93, 255, 1)`,
  width: `145px`,
  height: `61px`,
  position: `absolute`,
  left: `1225px`,
  top: `44px`,
});

const SignUp = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `122px`,
  height: `41px`,
  position: `absolute`,
  left: `1241px`,
  top: `54px`,
});

const Rectangle2 = styled("div")({
  backgroundColor: `rgba(93, 93, 255, 1)`,
  width: `283px`,
  height: `73px`,
  position: `absolute`,
  left: `406px`,
  top: `615px`,
});

const StartFreeTrial = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `238px`,
  height: `49px`,
  position: `absolute`,
  left: `428px`,
  top: `627px`,
});

const Rectangle3 = styled("div")({
  backgroundColor: `rgba(51, 54, 58, 1)`,
  width: `283px`,
  height: `73px`,
  position: `absolute`,
  left: `750px`,
  top: `615px`,
});

const LearnMore = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `238px`,
  height: `49px`,
  position: `absolute`,
  left: `773px`,
  top: `627px`,
});

const LandingTemplate = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `96px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `985px`,
  height: `108px`,
  position: `absolute`,
  left: `227px`,
  top: `296px`,
});

const LoremIpsumIsSimplyDu = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `1166px`,
  height: `132px`,
  position: `absolute`,
  left: `136px`,
  top: `452px`,
});

const Features03Image021 = styled("img")({
  height: `873px`,
  width: `1162px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `140px`,
  top: `811px`,
});


function Desktop1() {
  return (
    <Desktop11>
      <Image2 src={Image2Image} loading='lazy' alt={"image 2"}/>
      <SignIn>
        {`Sign in`}
      </SignIn>
      <Rectangle1>
      </Rectangle1>
      <SignUp>
        {`Sign up`}
      </SignUp>
      <Rectangle2>
      </Rectangle2>
      <StartFreeTrial>
        {`Start Free Trial`}
      </StartFreeTrial>
      <Rectangle3>
      </Rectangle3>
      <LearnMore>
        {`Learn More`}
      </LearnMore>
      <LandingTemplate>
        {`Landing Template`}
      </LandingTemplate>
      <LoremIpsumIsSimplyDu>
        {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
      </LoremIpsumIsSimplyDu>
      <Features03Image021 src={Features03Image021Image} loading='lazy' alt={"features-03-image-02 1"}/>
    </Desktop11>);

  }

export default Desktop1;

  