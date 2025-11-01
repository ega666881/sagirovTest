import { observer } from "mobx-react";
import { Box, Grid, Typography } from "@mui/material";


import { assets } from "../../../../utils/mediaManager";

import { firstContentBlockAssets } from "../../assets";

import clientStore from "../../../../stores/clientStore";
import rightBlockStore from "../../../../stores/contentBlocks/rightBlockStore";
import contentStore from "../../../../stores/contentBlocks/contentStore";


function RightFullSizeBlock() { 
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                justifyContent: 'center',
                padding: 2,
                borderRadius: 7,
                maxWidth: clientStore.isMobile ? "95%":"97%",
                maxHeight: "100%",
                backgroundImage: `url(${firstContentBlockAssets.rightFullSizeBlockImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: '35vh'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    
                }}
            >
                <Box
                    sx={{
                        borderRadius: 8,
                        backgroundColor: 'white',
                        padding: 1,
                    }}
                >
                    <Typography

                    > 
                        {contentStore.texts.find(text => text.name == 'rightBlockTitle')?.title}
                    </Typography>
                </Box>
                <img src={assets.titleLogoIcon} />
            </Box>
            <Box 
                sx={{
                    flexGrow: 1, 
                    marginTop: 7,
                    p: 2,
                    display: 'flex',
                    width: "100%",
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Grid 
                    container 
                    spacing={2}
                    maxWidth={"100%"}
                    sx={{
                        
                    }}
                    
                >
                    {rightBlockStore.gridItems.map(card => (
                        <Grid 
                            item
                            sx={{
                               minWidth: "45%",
                               
                            }}
                            xs={6}
                            
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    padding: 0.5,
                                    backgroundColor: 'white',
                                    borderRadius: 11,
                                    maxheight: "10vh",
                                    gap: 1,
                                }}
                            >
                                <img src={card.iconUrl} width={"15%"}/>
                                <Box
                                    sx={{
                                        width: "100%"
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 12,
                                            maxWidth: "50%",
                                            textWrap: clientStore.isMobile ? 'wrap':'nowrap'
                                        }}
                                    >
                                        {card.title}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            maxWidth: "100%"
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {card.cost}
                                        </Typography>

                                        <img 
                                            src={firstContentBlockAssets.blackStrokeArrow}
                                            style={{
                                                alignSelf: 'center',
                                                width: 17,
                                                marginRight: 15,
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default observer(RightFullSizeBlock)
