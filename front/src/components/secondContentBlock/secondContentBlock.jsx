import { observer } from "mobx-react";
import { Box, Grow, Slide, Typography } from "@mui/material";

import clientStore from "../../stores/clientStore";
import MiniBlock from "../sharedComponents/miniBlock";
import { secondBlockAssets } from "./assets";
import PopularsCategory from "./popularsCategory";
import useOnScreen from "./useOnScreen";
import { useRef } from "react";
import contentStore from "../../stores/contentBlocks/contentStore";

function SecondBlock() {
    const ref = useRef(null)
    const isVisible = useOnScreen(ref, { threshold: 0.1 })

    return ( //contentStore.texts.find(text => text.name == 'product1')?.title
            <Box
                
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    flex: 1,
                    width: "97%",
                    gap: 2,
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginTop: 2,
                    padding: 2,
                }}
            >
                <Typography
                    sx={{
                        display: 'flex',
                        alignSelf: 'start',
                        textAlign: 'start',
                        fontSize: {
                            xs: '1rem', 
                            sm: '1.25rem',
                            md: '1.5rem',  
                            lg: '1.75rem',
                            xl: '3rem', 
                        },
                    }}
                >
                    {contentStore.texts.find(text => text.name == 'bestsellersTitle')?.title}
                </Typography>
                <Box
                    ref={ref}
                    sx={{
                        display: 'flex',
                        flexDirection: clientStore.isMobile ? 'column':'row',
                        maxWidth: '100%',
                        gap: 1,
                    }}
                >
                    <Slide
                        in={isVisible}
                        direction="right"
                        timeout={{
                            enter: 800
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                            }}
                        >
                            <MiniBlock 
                                titleText={contentStore.texts.find(text => text.name == 'category4')?.title}
                                titleLeftLogoUrl={secondBlockAssets.lockIcon}
                                backgroundImageUrl={secondBlockAssets.nativeWalletsImage}
                                linkIcon={true}
                            />
                            <MiniBlock 
                                titleText={contentStore.texts.find(text => text.name == 'category5')?.title} 
                                titleLeftLogoUrl={secondBlockAssets.lockIcon}
                                backgroundImageUrl={secondBlockAssets.u2ftokensImage}
                                linkIcon={true}
                            />
                        </Box>
                    </Slide>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                        }}
                    >
                        <Grow
                            in={isVisible}
                            timeout={{
                                enter: 800
                            }}
                        >
                            <Box>
                                <MiniBlock 
                                    titleText={contentStore.texts.find(text => text.name == 'product2')?.title}
                                    bottomText={contentStore.texts.find(text => text.name == 'seedPhraseDescription')?.title}
                                    titleLeftLogoUrl={secondBlockAssets.lockIcon}
                                    backgroundImageUrl={
                                        clientStore.isMobile ? (secondBlockAssets.defaultMobileBackgroundImage):(secondBlockAssets.defaultBackgroundImage)
                                    }
                                    linkIcon={true}
                                />
                                <PopularsCategory />
                                <MiniBlock
                                    titleLeftLogoUrl={secondBlockAssets.lockIcon}
                                    titleText={contentStore.texts.find(text => text.name == 'category1')?.title} 
                                    bottomText={contentStore.texts.find(text => text.name == 'cablesDescription')?.title}
                                    backgroundImageUrl={
                                        clientStore.isMobile ? (secondBlockAssets.defaultMobileBackgroundImage):(secondBlockAssets.defaultBackgroundImage)
                                    }
                                    linkIcon={true}
                                />
                            </Box>
                        </Grow>
                    </Box>
                    <Slide
                        in={isVisible}
                        direction="left"
                        timeout={{
                            enter: 800
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                            }}
                        >
                            <MiniBlock
                                titleLeftLogoUrl={secondBlockAssets.lockIcon}
                                titleText={contentStore.texts.find(text => text.name == 'navAccessories')?.title}
                                backgroundImageUrl={secondBlockAssets.accessoriesImage}
                                linkIcon={true}
                            />
                            <MiniBlock 
                                titleLeftLogoUrl={secondBlockAssets.lockIcon}
                                titleText={contentStore.texts.find(text => text.name == 'category6')?.title}
                                backgroundImageUrl={secondBlockAssets.casesImage}
                                linkIcon={true}
                            />
                        </Box>
                    </Slide>
                </Box>         
            </Box>
    )
}

export default observer(SecondBlock)
