import { observer } from "mobx-react";
import { Box, Slide } from "@mui/material";

import MiniBlock from "../../../sharedComponents/miniBlock";
import { assets } from "../../../../utils/mediaManager";
import RightFullSizeBlock from "./fullSizeBlock";
import { firstContentBlockAssets } from "../../assets";
import clientStore from "../../../../stores/clientStore";
import contentStore from "../../../../stores/contentBlocks/contentStore";

function RightBlock() {
  return (
    <Slide
        direction="left"
        in={true}
        timeout={{
            enter: 900,
        }}
    >
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
                alignItems: 'center',
                gap: 1,
                minWidth: "100%",
                minHeight: "100%",
            }}
        >
            <RightFullSizeBlock />
            <Box
                sx={{
                    display: 'flex',
                    minWidth: "100%",
                    flexDirection: clientStore.isMobile ? 'column':'row',
                    minHeight: "100%",
                    gap: 1,
                }}
            >
                <MiniBlock 
                    titleText={contentStore.texts.find(text => text.name == 'category8')?.title} 
                    titleTextBackgroundColor={'#E9EDF3'}
                    titleTextWrap={'wrap'}
                    titleLogoUrl={firstContentBlockAssets.newsLogoIcon}
                    backgroundImageUrl={firstContentBlockAssets.newsBackgroundImage}
                />
                <MiniBlock 
                    titleText={contentStore.texts.find(text => text.name == 'category2')?.title}
                    titeTextColor={'white'}
                    backgroundImageUrl={firstContentBlockAssets.titanStorageBackgroundImage}
                />
                
            </Box>
        </Box>
    </Slide>
  ) 
}

export default observer(RightBlock)
