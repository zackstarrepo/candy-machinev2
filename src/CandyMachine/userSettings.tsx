import * as anchor from "@project-serum/anchor";
import React from "react";

import {
  WhitelistSettings,
  PublicSaleSettings,
  WelcomeSettings,
} from "./userSettingsInterfaces";

function date(date: string) {
  let f = new anchor.BN(new Date(date).getTime() / 1000);
  return f;
}

//
// Below are settings that will trigger the UI of the mint box currently. This is a basic
// implementation to start with but incorporates whitelist minting sales by turning on
// the mint function between to dates. This will allow users to mint while the candy machine
// is still in it's off state allowing minting via SLP tokens.
//
// You can play with the settings below and also the CMv2 start time setting to trigger different
// the different UI modes.
//
//  This is the current UI set up below and the new phases.
//
//    Welcome
//    Whitelist
//    Public Minting
//
//    any settings you are not using need to be set as 'undefined' without quotetation marks
//
//         title: undefined
//
//    for dates use the following format
//
//        date('1 Jan 2020 00:00:00 <timezone>')
//
//
//

export const mintPanic = {
  enabled: false,
  title: "Minting Paused",
  desc: "We have dectected and issue while minting. Standby for an update",
};

///                             ///
///      Welcome Settings       ///
///                             ///

export const welcomeSettings: WelcomeSettings = {

  //Title and Description
  title: "Welcome!",
  desc: "Connect your wallet and load in! Whitelist mint starts soon!",

  // Countdown Timer
  countdownEnable: true,
  countdownTo: date("08 Jan 2022 22:00:00 GMT"),
  //Example date below
  // date('29 2021 00:00:00 GMT')

  // showprice
  showPrice: true,

  //Enable Custom HTML
  enableCustomHTML: true,
};

export class MintWelcomeCustomHTML extends React.Component {
  render() {
    return (
      <div className="custom-mint-container">
        {/* Add Custom HTML code for Welcome Here! */}

        
        <p>Pre Sale will be started soon !</p>
        
        
        {/* End */}
      </div>
    );
  }
}



///                             ///
///   Whitelist Sale Settings   ///
///                             ///

// The white list does NOTHING to the candy machine itself. It just enables the mint button
// on the site so people can purchase as long as you have the SLP token's set up for you
// whitelist. If your candy machine is not set up for SLP token whitelist purchasing then
// all transations will fail, all transactions will fail for people who also do not hold the
// SLP token. This also does not stop people minting directly from the program.

export const whitelistSettings: WhitelistSettings = {
  //If you want to use the whitelist feature enable it.
  enabled: true,

  startDate: date("08 Jan 2022 22:00:00 GMT"),
  endDate: date("08 Jan 2022 22:30:00 GMT"),
  countdown: true,
  //Example date below
  // date('29 2021 00:00:00 GMT')

  //Wallet Title and Description
  title: "Frog Nation Froggers",
  desc: undefined,

  //Enable Custom HTML Below
  enableCustomHTML: true,
};


export class MintWhitelistCustomHTML extends React.Component {
  render() {
    return (
      <div className="custom-mint-container">
        {/* Add Custom HTML code for Whitelist Stage Here! */}

        
        <p>Pre Sale !!!!</p>
        
        
        {/* End */}
      </div>
    );
  }
}


///                             ///
///     Public Sale Settings    ///
///                             ///

export const publicSaleSettings: PublicSaleSettings = {
  //start date and end date must match your Candy Machine Config for public launch!

  startDate: date("14 Jan 2022 19:00:00 GMT"),
  endDate: undefined,
  countdown: false,
  //Example date below
  // date('29 2021 00:00:00 GMT')

  //Title and Description
  title: "Frog Nation NFT",
  desc: "Public Sale is now live. Mint your Frog Nation Frog below",

  //Enable Custom HTML
  enableCustomHTML: true,
};

export class MintPublicSaleCustomHTML extends React.Component {
  render() {
    return (
      <div className="custom-mint-container">
        {/* Add Custom HTML code for Public Minting Here! */}

        
        <p>Sold Out !!!!</p>
        
        
        {/* End */}
      </div>
    );
  }
}
