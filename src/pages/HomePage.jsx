import { StyledContent, StyledFooter, StyledImg } from '../atoms.js'

export const HomePage = () => {
  return (
  <StyledContent>
    <h1>Discover and book hotels and restaurants selected by the MICHELIN Guide</h1>
    <StyledImg
      src='https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2023/11/07/f2c8ca2c38274deea402e0257e349581_1196006_pro_4.jpg'
      alt='dish'
    />
    <h2>About The MICHELIN Guide</h2>
    <StyledImg
      src='https://axwwgrkdco.cloudimg.io/v7/__gmpics__/2f873996bd6549efa6c03cab58b3229e'
      alt='dish'
    />
    <h3>What is a Michelin Star?</h3>
    <p>A Michelin Star is awarded to restaurants offering outstanding cooking. We take into account
    five universal criteria: the quality of the ingredients, the harmony of flavours, the mastery of
    techniques, the personality of the chef as expressed through their cuisine and, just as importantly,
    consistency both across the entire menu and over time.</p>
    <img
      src='https://guide.michelin.com/assets/images/icons/michelin-star.svg'
      alt='dish'
    />
    <h3>Are Michelin Stars annual awards?</h3>
    <p>Yes. Along with seeking out new Stars, we continually reassess existing Star restaurants to
    ensure the same high standard of cooking is being offered to guests.</p>
    <StyledFooter>
      <img
        src='https://guide.michelin.com/assets/images/Michelin-guide-vertical.svg'
        alt='michelin'
      />
      <p>Copyright © 2023 MICHELIN Guide. All rights reserved.<br />
        <a href="https://guide.michelin.com/en/terms-of-use">Terms of Use</a> • <a href="javascript:Didomi.preferences.show()">Cookies</a> • <a href="https://guide.michelin.com/en/privacy-policy">Privacy Policy</a> • <a href="https://guide.michelin.com/en/legal-notice">Legal Notice</a>
      </p>
    </StyledFooter>
  </StyledContent>
  )
}
