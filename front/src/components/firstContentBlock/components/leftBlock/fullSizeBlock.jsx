import { observer } from "mobx-react";
import { Box, Button, Avatar, AvatarGroup, Typography } from "@mui/material";


import { assets } from "../../../../utils/mediaManager";
import { firstContentBlockAssets } from './../../assets';
import clientStore from "../../../../stores/clientStore";
import contentStore from "../../../../stores/contentBlocks/contentStore";


function FullSizeBlock() {
  return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            justifyContent: 'center',
            padding: 2,
            borderRadius: 7,
            width: clientStore.isMobile ? "95%":"100%",
            minHeight: '35vh'
        }}
    >
        <Box>
            <Typography
                sx={{
                    minwidth: "100%",
                    color: 'black',
                    fontSize: {
                        xs: '1rem', 
                        sm: '1.25rem',
                        md: '1.5rem',  
                        lg: '1.75rem',
                        xl: '3rem', 
                    },
                    display: 'flex',
                    gap: 1,
                }}
            >
                {contentStore.texts.find(text => text.name == 'mainHeading')?.title}
            </Typography>
            <Typography
                sx={{
                    color: 'black',
                    marginTop: -1,
                    textWrap: 'nowrap',
                    fontSize: {
                        xs: '1rem', 
                        sm: '1.25rem',
                        md: '1.5rem',  
                        lg: '1.75rem',
                        xl: '3rem', 
                    },
                    justifyContent: 'space-between',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {contentStore.texts.find(text => text.name == 'mainHeading2')?.title}
                <Button
                    sx={{
                        display: 'flex',
                        backgroundColor: '#17BE79',
                        borderRadius: 10,
                        alignItems: 'center',
                        alignSelf: 'center',
                        padding: 0.5,
                        gap: 1,
                    }}
                >
                    <img src={assets.strokeArrow} width={"20%"}/>
                    <Typography
                        sx={{
                            fontSize: {
                                xs: '0.5rem', 
                                xl: '0.7rem', 
                            },
                            color: 'white'
                        }}
                    >
                        {contentStore.texts.find(text => text.name == 'catalogButton')?.title}
                    </Typography>
                </Button>
            </Typography>
        </Box>
        <Box
            sx={{
                maxWidth: "70%"
            }}
        >
            <Typography
                sx={{
                    fontSize: {
                        xs: '1rem', 
                        sm: '1rem',
                        md: '1.25rem',  
                        lg: '1.5rem',
                        xl: '1.5rem', 
                    },
                }}
            >
                {contentStore.texts.find(text => text.name == 'subtitle')?.title}
            </Typography>
        </Box>

        <Box
            sx={{
                display: 'flex',
                flexDirection: clientStore.isMobile ? 'column':'row',
                justifyContent: 'space-between',
                alignContent: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                }}
            >
                {[
                    {
                        firstText: contentStore.texts.find(text => text.name == '10+')?.title,
                        secondText: contentStore.texts.find(text => text.name == 'marketExperience')?.title,
                    },
                    {
                        firstText: contentStore.texts.find(text => text.name == '50+')?.title,
                        secondText: contentStore.texts.find(text => text.name == 'brandsCount')?.title,
                    }
                ].map(block => (
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                fontSize: {
                                    xs: '1rem', 
                                    sm: '1.25rem',
                                    md: '1.5rem',  
                                    lg: '1.75rem',
                                    xl: '4rem', 
                                },
                            }}
                        >
                            {block.firstText}
                        </Typography>
                        <Typography
                            sx={{
                                textWrap: 'nowrap',
                                marginTop: -1
                            }}
                        >   
                            {block.secondText}
                        </Typography>
                    </Box>
                ))}
            </Box>
            <Box
                sx={{
                    alignContent: 'center'
                }}
            >
                <AvatarGroup
                    max={10}
                    sx={{}}
                >
                    {[
                        firstContentBlockAssets.usbStorage,
                        firstContentBlockAssets.phoneIcon,
                        firstContentBlockAssets.usbModule,
                        firstContentBlockAssets.multimetr,
                        firstContentBlockAssets.sdCard,
                        firstContentBlockAssets.titanStorage,
                    ].map(iconUrl => (
                        <Avatar
                            alt="Remy Sharp"
                            src={iconUrl}
                            sx={{
                                width: "15%",
                                height: "10%"
                            }}
                        />
                    ))}
                    
                </AvatarGroup>
            </Box>
        </Box>
    </Box>
  )
}

export default observer(FullSizeBlock)
