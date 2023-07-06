import React from "react";

import { Button, Img, Line, List, Text } from "components";

const LandingPageNFTPage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[89px] items-center justify-end w-full">
          <div className="sm:h-[1815px] md:h-[1977px] h-[3105px] md:px-5 relative w-full">
            <div className="flex flex-col m-auto w-full">
              <div className="flex flex-col mx-auto w-full">
                <div className="mx-auto overflow-x-auto w-full">
                  <div className="flex overflow-auto relative w-full">
                    <div className="sm:h-[1051px] h-[1518px] md:h-[958px] my-auto w-full">
                      <div className="sm:h-[1051px] h-[1518px] md:h-[958px] m-auto w-full">
                        <div className="absolute sm:h-[1051px] h-[1518px] md:h-[958px] inset-y-[0] my-auto right-[0] w-[88%] md:w-full">
                          <div className="flex flex-col m-auto w-full">
                            <div className="flex flex-col items-center justify-start mx-auto w-full">
                              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                                <Img
                                  className="h-[599px] md:h-auto object-cover"
                                  src="images/img_ellipse12.png"
                                  alt="ellipseTwelve"
                                />
                                <Img
                                  className="h-[452px] md:h-auto object-cover"
                                  src="images/img_ellipse14.png"
                                  alt="ellipseFourteen"
                                />
                              </div>
                            </div>
                            <div className="h-[1379px] md:h-[919px] mt-[-460px] mx-auto w-full z-[1]">
                              <Img
                                className="h-[1379px] m-auto object-cover w-full"
                                src="images/img_ellipse13.png"
                                alt="ellipseThirteen"
                              />
                              <Img
                                className="absolute h-[100px] inset-y-[0] my-auto right-[5%] w-[100px]"
                                src="images/img_scrollexporer.svg"
                                alt="scrollexporer"
                              />
                            </div>
                          </div>
                          <Img
                            className="absolute h-[958px] inset-x-[0] mx-auto object-cover top-[5%]"
                            src="images/img_group.png"
                            alt="group"
                          />
                        </div>
                        <Img
                          className="absolute h-[396px] left-[0] object-cover top-[23%] w-[29%]"
                          src="images/img_spline16.png"
                          alt="splineSixteen"
                        />
                        <Img
                          className="absolute bottom-[35%] h-[82px] right-[0] w-[1440px]"
                          src="images/img_brands.svg"
                          alt="brands"
                        />
                      </div>
                      <div className="absolute flex flex-col gap-[30px] items-center justify-start right-[14%] top-[8%] w-auto">
                        <div className="flex flex-col gap-2.5 items-center justify-start w-auto md:w-full">
                          <Img
                            className="h-[67px] md:h-auto object-cover w-9 sm:w-full"
                            src="images/img_frame.png"
                            alt="frame"
                          />
                          <Text
                            className="leading-[65.00px] max-w-[765px] md:max-w-full md:text-5xl text-[70px] text-center text-white-A700"
                            size="txtInterBold70"
                          >
                            Discover and collect super rare NFTs
                          </Text>
                          <Text
                            className="leading-[25.00px] max-w-[480px] md:max-w-full text-base text-center text-white-A700"
                            size="txtInterRegular16"
                          >
                            Digital marketplace for crypto collectibles and
                            NFTs. Buy, sell, and discover exclusive digital
                            assets today.
                          </Text>
                          <Button className="bg-gradient  cursor-pointer font-bold h-[70px] leading-[normal] py-[25px] rounded-[35px] text-base text-black-900_01 text-center uppercase w-[264px]">
                            connect wallet
                          </Button>
                        </div>
                        <div className="h-[375px] sm:h-[583px] relative w-full">
                          <div className="absolute bottom-[0] h-[273px] sm:h-[583px] inset-x-[0] mx-auto w-full">
                            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                                <Img
                                  className="sm:flex-1 h-[273px] md:h-auto object-cover w-[272px] sm:w-full"
                                  src="images/img_clonex11.png"
                                  alt="clonexEleven"
                                />
                                <Img
                                  className="h-[270px] md:h-auto object-cover w-[270px]"
                                  src="images/img_clonex6.png"
                                  alt="clonexSix"
                                />
                              </div>
                            </div>
                            <div className="absolute flex sm:flex-col flex-row sm:gap-10 h-max inset-[0] items-center justify-between m-auto w-[68%]">
                              <Img
                                className="h-[272px] md:h-auto object-cover w-[271px] sm:w-full"
                                src="images/img_clonex9.png"
                                alt="clonexNine"
                              />
                              <Img
                                className="h-[270px] md:h-auto object-cover"
                                src="images/img_clonex7.png"
                                alt="clonexSeven"
                              />
                            </div>
                          </div>
                          <Img
                            className="absolute h-[375px] inset-[0] justify-center m-auto object-cover w-[375px]"
                            src="images/img_clonex10.png"
                            alt="clonexTen"
                          />
                        </div>
                      </div>
                    </div>
                    <header className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-[undefinedpx] mr-auto mt-9 w-full z-[1]">
                      <div className="flex md:flex-1 flex-row gap-2.5 items-center justify-start w-[14%] md:w-full">
                        <Img
                          className="h-8"
                          src="images/img_minimize.svg"
                          alt="minimize"
                        />
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtInterExtraBold24"
                        >
                          Cryptoart
                        </Text>
                      </div>
                      <ul className="flex sm:flex-col flex-row gap-6 sm:hidden items-start justify-start w-auto common-row-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-sm text-white-A700 uppercase"
                          >
                            <Text size="txtInterBold14">home</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-sm text-white-A700 uppercase"
                          >
                            <Text size="txtInterBold14">about</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-sm text-white-A700 uppercase"
                          >
                            <Text size="txtInterBold14">characters</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-sm text-white-A700 uppercase"
                          >
                            <Text size="txtInterBold14">FAQ</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-sm text-white-A700 uppercase"
                          >
                            <Text size="txtInterBold14">community</Text>
                          </a>
                        </li>
                      </ul>
                      <div className="flex flex-row gap-[17px] items-start justify-start w-auto">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_user.svg"
                          alt="user"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_twitter.svg"
                          alt="twitter"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_frame_white_a700.svg"
                          alt="frame_One"
                        />
                      </div>
                    </header>
                    <Img
                      className="h-[396px] ml-[-237px] mt-[348px] object-cover w-[34%] z-[1]"
                      src="images/img_spline15.png"
                      alt="splineFifteen"
                    />
                  </div>
                </div>
                <Img
                  className="h-[1522px] mt-[-429px] mx-auto object-cover md:w-full z-[1]"
                  src="images/img_effectsabout.png"
                  alt="effectsabout"
                />
              </div>
              <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mt-[-262px] mx-auto w-auto md:w-full z-[1]">
                <div className="h-[191px] relative w-full">
                  <Img
                    className="absolute h-[190px] inset-[0] justify-center m-auto object-cover w-[43%]"
                    src="images/img_spline13.png"
                    alt="splineThirteen"
                  />
                  <Img
                    className="absolute h-[191px] inset-y-[0] left-[0] my-auto object-cover w-[30%]"
                    src="images/img_spline18.png"
                    alt="splineEighteen"
                  />
                  <Img
                    className="absolute h-[191px] inset-y-[0] my-auto object-cover right-[0] w-[32%]"
                    src="images/img_spline17.png"
                    alt="splineSeventeen"
                  />
                </div>
                <div className="flex flex-col gap-10 items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
                  <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-full">
                    <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-red-A200_01 sm:text-xl w-auto"
                        size="txtInterBold24"
                      >
                        Find your
                      </Text>
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                        size="txtInterBold40"
                      >
                        Favourite character
                      </Text>
                    </div>
                    <Img
                      className="sm:flex-1 h-[43px] md:h-auto object-cover w-24 sm:w-full"
                      src="images/img_frame75.png"
                      alt="frameSeventyFive"
                    />
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-full"
                    orientation="horizontal"
                  >
                    <div className="border border-solid flex flex-1 flex-col gap-[18px] items-start justify-start px-5 py-6 red_A200_deep_purple_A200_border rounded-[20px] w-full">
                      <div className="flex flex-row gap-1 items-end justify-start w-auto">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-auto"
                          size="txtInterBold25"
                        >
                          A.
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Monkey Icon
                        </Text>
                      </div>
                      <div className="h-[241px] relative w-[241px]">
                        <div className="bg-gradient1  h-60 m-auto rounded-[10px] w-[98%]"></div>
                        <Img
                          className="absolute h-[241px] inset-[0] justify-center m-auto object-cover w-[241px]"
                          src="images/img_bayc7.png"
                          alt="baycSeven"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col gap-px items-start justify-start w-auto">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16"
                          >
                            12h:10m:23s
                          </Text>
                          <Text
                            className="text-gray-700 text-xs w-auto"
                            size="txtInterRegular12"
                          >
                            Remaning Time
                          </Text>
                        </div>
                        <div className="flex flex-col gap-px items-start justify-start w-auto">
                          <Text
                            className="text-base text-lime-A400 w-auto"
                            size="txtInterBold16"
                          >
                            18.87 ETH
                          </Text>
                          <Text
                            className="text-gray-700 text-xs w-auto"
                            size="txtInterRegular12"
                          >
                            Highest bid
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="border border-solid flex flex-1 flex-col gap-[18px] items-start justify-start px-5 py-6 red_A200_deep_purple_A200_border2 rounded-[20px] w-full">
                      <div className="flex flex-row gap-1.5 items-end justify-start w-auto">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-auto"
                          size="txtInterBold25"
                        >
                          B.
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Monkey Icon
                        </Text>
                      </div>
                      <div className="bg-gradient2  flex flex-col h-60 md:h-auto items-end justify-center rounded-[10px] w-full">
                        <Img
                          className="h-[237px] md:h-auto object-cover w-[222px]"
                          src="images/img_bayc8.png"
                          alt="baycEight"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col gap-px items-start justify-start w-auto">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16"
                          >
                            12h:10m:23s
                          </Text>
                          <Text
                            className="text-gray-700 text-xs w-auto"
                            size="txtInterRegular12"
                          >
                            Remaning Time
                          </Text>
                        </div>
                        <div className="flex flex-col gap-px items-start justify-start w-auto">
                          <Text
                            className="text-base text-lime-A400 w-auto"
                            size="txtInterBold16"
                          >
                            18.87 ETH
                          </Text>
                          <Text
                            className="text-gray-700 text-xs w-auto"
                            size="txtInterRegular12"
                          >
                            Highest bid
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="border border-solid flex flex-1 flex-col gap-[18px] items-start justify-start px-5 py-6 red_A200_deep_purple_A200_border3 rounded-[20px] w-full">
                      <div className="flex flex-row gap-1 items-end justify-start w-auto">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-auto"
                          size="txtInterBold25"
                        >
                          C.
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Monkey Icon
                        </Text>
                      </div>
                      <div className="bg-gradient3  flex flex-col h-60 md:h-auto items-end justify-center rounded-[10px] w-full">
                        <Img
                          className="h-[233px] md:h-auto object-cover w-[233px]"
                          src="images/img_bayc3.png"
                          alt="baycThree"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col gap-px items-start justify-start w-auto">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16"
                          >
                            12h:10m:23s
                          </Text>
                          <Text
                            className="text-gray-700 text-xs w-auto"
                            size="txtInterRegular12"
                          >
                            Remaning Time
                          </Text>
                        </div>
                        <div className="flex flex-col gap-px items-start justify-start w-auto">
                          <Text
                            className="text-base text-lime-A400 w-auto"
                            size="txtInterBold16"
                          >
                            18.87 ETH
                          </Text>
                          <Text
                            className="text-gray-700 text-xs w-auto"
                            size="txtInterRegular12"
                          >
                            Highest bid
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="border border-solid flex flex-1 flex-col gap-[18px] items-start justify-start px-5 py-6 red_A200_deep_purple_A200_border4 rounded-[20px] w-full">
                      <div className="flex flex-row gap-[5px] items-end justify-start w-auto">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-auto"
                          size="txtInterBold25"
                        >
                          D.
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Monkey Icon
                        </Text>
                      </div>
                      <div className="bg-gradient4  flex flex-col h-60 md:h-auto items-end justify-center px-1 rounded-[10px] w-full">
                        <Img
                          className="h-[239px] md:h-auto object-cover w-[229px]"
                          src="images/img_bayc2.png"
                          alt="baycTwo"
                        />
                      </div>
                      <div className="flex flex-row gap-[67px] items-start justify-start w-full">
                        <div className="flex flex-col gap-px items-start justify-start w-auto">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16"
                          >
                            12h:10m:23s
                          </Text>
                          <Text
                            className="text-gray-700 text-xs w-auto"
                            size="txtInterRegular12"
                          >
                            Remaning Time
                          </Text>
                        </div>
                        <div className="flex flex-col gap-px items-start justify-start w-auto">
                          <Text
                            className="text-base text-lime-A400 w-auto"
                            size="txtInterBold16"
                          >
                            18.87 ETH
                          </Text>
                          <Text
                            className="text-gray-700 text-xs w-auto"
                            size="txtInterRegular12"
                          >
                            Highest bid
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[22%] flex flex-col md:gap-10 gap-[60px] inset-x-[0] items-center justify-center mx-auto md:px-10 sm:px-5 px-[190px] py-[120px] w-auto md:w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start w-auto md:w-full">
                <Text
                  className="leading-[110.00%] max-w-[616px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                  size="txtInterBold40"
                >
                  A new wave of collectibles is about to hit the blockchain.
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[728px] md:max-w-full text-base text-center text-white-A700"
                  size="txtInterRegular16"
                >
                  Characterised by soft lighting, vintage colour schemes and
                  quirky costumes, these generative 3D TinyFaces are the
                  addition to your NFT collection you’ve been waiting for.
                </Text>
              </div>
              <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                  <div className="md:h-[445px] h-[466px] relative w-[51%] md:w-full">
                    <div className="absolute bottom-[0] flex h-[445px] justify-end left-[5%] w-[445px] sm:w-full">
                      <div className="bg-gradient5  h-[350px] ml-0.5 mt-auto rounded-bl-[60px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[60px] w-[95%]"></div>
                      <Img
                        className="absolute h-[445px] inset-[0] justify-center m-auto object-cover w-[445px]"
                        src="images/img_clonex1.png"
                        alt="clonexOne"
                      />
                    </div>
                    <Img
                      className="absolute h-[206px] object-cover right-[0] top-[0] w-[33%]"
                      src="images/img_spline10.png"
                      alt="splineTen"
                    />
                    <div className="absolute bg-white-A700_33 border border-solid border-white-A700_19 flex flex-col h-[93px] items-center justify-start left-[0] p-[13px] rounded-[46px] top-[16%] w-[93px]">
                      <Img
                        className="h-[67px] md:h-auto object-cover"
                        src="images/img_frame_deep_purple_100.png"
                        alt="frame_Two"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col font-roboto gap-1 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-red-A200 sm:text-xl w-auto"
                          size="txtRobotoBold24"
                        >
                          About
                        </Text>
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                          size="txtRobotoBold40"
                        >
                          Thousands of unique NFTs
                        </Text>
                      </div>
                      <Text
                        className="leading-[150.00%] max-w-[487px] md:max-w-full text-base text-white-A700"
                        size="txtInterRegular16"
                      >
                        Each character is entirely unique and is generated by
                        combining attributes such as colour palettes, skin
                        tones, facial traits, outfits and accessories. With
                        nearly endless combinations, all characters are
                        guaranteed to be one of a kind.
                      </Text>
                    </div>
                    <Button className="bg-transparent border border-solid cursor-pointer font-bold h-[70px] leading-[normal] py-[25px] red_A200_deep_purple_A200_border5 rounded-[35px] text-base text-center text-red-A200 uppercase w-[225px]">
                      Place a bid
                    </Button>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                  <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col font-roboto gap-1 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-red-A200 sm:text-xl w-auto"
                          size="txtRobotoBold24"
                        >
                          About
                        </Text>
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                          size="txtRobotoBold40"
                        >
                          Secure the most rare
                        </Text>
                      </div>
                      <Text
                        className="leading-[150.00%] max-w-[487px] md:max-w-full text-base text-white-A700"
                        size="txtInterRegular16"
                      >
                        Even though no two Tinyfaces will ever be the same, some
                        variations are rarer than others. Watch out for special
                        accessories and raw materials - the rarer the
                        attributes, the rarer your character will be.
                      </Text>
                    </div>
                    <Button className="bg-transparent border border-solid cursor-pointer font-bold h-[70px] leading-[normal] py-[25px] red_A200_deep_purple_A200_border6 rounded-[35px] text-base text-center text-red-A200 uppercase w-[225px]">
                      Place a bid
                    </Button>
                  </div>
                  <div className="md:h-[455px] h-[467px] relative w-[53%] md:w-full">
                    <div className="absolute flex h-[455px] inset-y-[0] justify-end my-auto right-[0] w-[455px] sm:w-full">
                      <div className="bg-gradient  h-[350px] ml-1 mt-auto rounded-bl-[60px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[60px] w-[93%]"></div>
                      <div className="absolute h-[455px] inset-[0] justify-center m-auto w-[455px] sm:w-full">
                        <Img
                          className="h-[455px] m-auto object-cover w-[455px]"
                          src="images/img_clonex3.png"
                          alt="clonexThree"
                        />
                        <div className="absolute bg-white-A700_33 border border-solid border-white-A700_19 flex flex-col h-[93px] items-center justify-start p-[13px] right-[0] rounded-[46px] top-[18%] w-[93px]">
                          <Img
                            className="h-[67px] md:h-auto object-cover"
                            src="images/img_frame_deep_purple_100.png"
                            alt="frame_Three"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[248px] left-[0] object-cover top-[0] w-[37%]"
                      src="images/img_spline12.png"
                      alt="splineTwelve"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start w-auto md:w-full">
            <Line className="bg-gradient  h-px w-full" />
            <div className="flex flex-col gap-[46px] items-center justify-start md:px-5 w-auto md:w-full">
              <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-red-A200_01 w-auto"
                  size="txtInterBold30"
                >
                  FAQ
                </Text>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                  size="txtInterBold40"
                >
                  Your questions, answered.
                </Text>
              </div>
              <div className="flex flex-col font-roboto gap-4 items-start justify-start w-auto md:w-full">
                <div className="bg-black-900_19 border border-solid flex flex-row sm:gap-10 items-center justify-between sm:px-5 px-6 py-5 red_A200_deep_purple_A200_border7 rounded-[10px] w-auto md:w-full">
                  <Text
                    className="text-lg text-white-A700 w-auto"
                    size="txtRobotoBold18"
                  >
                    What is an NFT?
                  </Text>
                  <Img
                    className="h-8 w-8"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </div>
                <div className="bg-black-900_19 border border-solid flex flex-row sm:gap-10 items-center justify-between sm:px-5 px-6 py-5 red_A200_deep_purple_A200_border8 rounded-[10px] w-auto md:w-full">
                  <Text
                    className="text-lg text-white-A700 w-auto"
                    size="txtRobotoBold18"
                  >
                    What makes our NFT special?
                  </Text>
                  <Img
                    className="h-8 w-8"
                    src="images/img_plus.svg"
                    alt="plus_One"
                  />
                </div>
                <div className="bg-black-900_19 border border-solid flex flex-row sm:gap-10 items-center justify-between sm:px-5 px-6 py-5 red_A200_deep_purple_A200_border9 rounded-[10px] w-auto md:w-full">
                  <Text
                    className="text-lg text-white-A700 w-auto"
                    size="txtRobotoBold18"
                  >
                    Who’s the team behind our NFT?
                  </Text>
                  <Img
                    className="h-8 w-8"
                    src="images/img_plus.svg"
                    alt="plus_Two"
                  />
                </div>
                <div className="bg-black-900_19 border border-solid flex flex-row sm:gap-10 items-center justify-between sm:px-5 px-6 py-5 red_A200_deep_purple_A200_border10 rounded-[10px] w-auto md:w-full">
                  <Text
                    className="text-lg text-white-A700 w-auto"
                    size="txtRobotoBold18"
                  >
                    When does minting begin?
                  </Text>
                  <Img
                    className="h-8 w-8"
                    src="images/img_plus.svg"
                    alt="plus_Three"
                  />
                </div>
                <div className="bg-black-900_19 border border-solid flex flex-row sm:gap-10 items-center justify-between sm:px-5 px-6 py-5 red_A200_deep_purple_A200_border11 rounded-[10px] w-auto md:w-full">
                  <Text
                    className="text-lg text-white-A700 w-auto"
                    size="txtRobotoBold18"
                  >
                    Who can mint one?
                  </Text>
                  <Img
                    className="h-8 w-8"
                    src="images/img_plus.svg"
                    alt="plus_Four"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:h-[927px] h-[936px] md:px-5 relative w-full">
            <Img
              className="absolute h-[927px] inset-[0] justify-center m-auto object-cover"
              src="images/img_group.png"
              alt="effectsfooter"
            />
            <div className="absolute bottom-[24%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-auto md:w-full">
              <Line className="bg-gradient  h-px w-full" />
              <div className="bg-black-900 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[588px] py-9 w-auto md:w-full">
                <div className="flex flex-col gap-[23px] items-center justify-start w-auto">
                  <div className="flex flex-row font-inter gap-2.5 items-center justify-center w-3/5 md:w-full">
                    <Img
                      className="h-8"
                      src="images/img_minimize.svg"
                      alt="minimize_One"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtInterExtraBold24"
                    >
                      Cryptoart
                    </Text>
                  </div>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtRobotoRegular14"
                  >
                    <span className="text-white-A700 font-roboto text-left font-normal">
                      © 2023{" "}
                    </span>
                    <a
                      href="javascript:"
                      className="text-white-A700 font-roboto text-left font-normal underline"
                    >
                      Nathalia Lourencao
                    </a>
                    <span className="text-white-A700 font-roboto text-left font-normal">
                      {" "}
                      | Made with ❤️
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col gap-10 inset-x-[0] items-center justify-start mx-auto top-[0] w-auto">
              <div className="flex flex-col gap-10 items-center justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
                  <Img
                    className="h-[67px] md:h-auto object-cover w-9 sm:w-full"
                    src="images/img_frame.png"
                    alt="frame_Four"
                  />
                  <div className="flex flex-col gap-2.5 items-center justify-start w-auto sm:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                      size="txtInterBold40"
                    >
                      Join the community
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[364px] md:max-w-full text-base text-center text-white-A700"
                      size="txtInterRegular16"
                    >
                      Join our Discord channel or follow us on Twitter keep up
                      to date with our latest work and announcements.
                    </Text>
                  </div>
                </div>
                <div className="flex relative w-[379px] sm:w-full">
                  <div className="flex my-auto w-[81%]">
                    <div className="flex my-auto w-[77%]">
                      <div className="flex my-auto w-[69%]">
                        <div className="bg-gray-900 border-[3px] border-solid flex flex-col h-[87px] items-center justify-start my-auto red_A200_deep_purple_A200_border12 rounded-[43px] w-[87px]">
                          <div className="flex flex-col h-[87px] items-center justify-start w-[87px]">
                            <Img
                              className="h-[87px] md:h-auto rounded-[50%] w-[87px]"
                              src="images/img_bayc5.png"
                              alt="baycFive"
                            />
                          </div>
                        </div>
                        <div className="bg-gray-900 border-[3px] border-solid flex flex-col h-[87px] items-center justify-start ml-[-14px] my-auto red_A200_deep_purple_A200_border13 rounded-[43px] w-[87px] z-[1]">
                          <div className="flex flex-col h-[87px] items-center justify-start w-[87px]">
                            <Img
                              className="h-[87px] md:h-auto rounded-[50%] w-[87px]"
                              src="images/img_bayc1.png"
                              alt="baycOne"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-900 border-[3px] border-solid flex flex-col h-[87px] items-center justify-start ml-[-14px] my-auto red_A200_deep_purple_A200_border14 rounded-[43px] w-[87px] z-[1]">
                        <div className="flex flex-col h-[87px] items-center justify-start w-[87px]">
                          <Img
                            className="h-[87px] md:h-auto rounded-[50%] w-[87px]"
                            src="images/img_bayc10.png"
                            alt="baycTen"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900 border-[3px] border-solid flex flex-col h-[87px] items-center justify-start ml-[-14px] my-auto red_A200_deep_purple_A200_border15 rounded-[43px] w-[87px] z-[1]">
                      <div className="flex flex-col h-[87px] items-center justify-start w-[87px]">
                        <Img
                          className="h-[87px] md:h-auto rounded-[50%] w-[87px]"
                          src="images/img_bayc6.png"
                          alt="baycSix"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900 border-[3px] border-solid flex flex-col h-[87px] items-center justify-start ml-[-14px] my-auto red_A200_deep_purple_A200_border16 rounded-[43px] w-[87px] z-[1]">
                    <div className="flex flex-col h-[87px] items-center justify-start w-[87px]">
                      <Img
                        className="h-[87px] md:h-auto rounded-[50%] w-[87px]"
                        src="images/img_bayc4.png"
                        alt="baycFour"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                <Button
                  className="bg-indigo-A200 border border-indigo-A200 border-solid cursor-pointer flex items-center justify-center min-w-[225px] px-[34px] py-[23px] rounded-[34px]"
                  leftIcon={
                    <Img
                      className="h-5 mt-px mr-2.5"
                      src="images/img_icondiscord.svg"
                      alt="icon-discord"
                    />
                  }
                >
                  <div className="font-bold leading-[normal] sm:px-5 text-base text-left text-white-A700 uppercase">
                    join discord
                  </div>
                </Button>
                <Button
                  className="bg-light_blue-A200 border border-light_blue-A200 border-solid cursor-pointer flex items-center justify-center min-w-[225px] p-[23px] rounded-[34px]"
                  leftIcon={
                    <Img
                      className="h-5 mt-px mr-2.5"
                      src="images/img_icontwitter.svg"
                      alt="icon-twitter"
                    />
                  }
                >
                  <div className="font-bold leading-[normal] sm:px-5 text-base text-left text-white-A700 uppercase">
                    follow twitter
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageNFTPage;
