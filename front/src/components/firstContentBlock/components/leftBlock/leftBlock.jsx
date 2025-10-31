import { observer } from "mobx-react";
import { Box, Grow, Slide } from "@mui/material";

import MiniBlock from "../../../sharedComponents/miniBlock";
import { assets } from "../../../../utils/mediaManager";
import FullSizeBlock from "./fullSizeBlock";
import { firstContentBlockAssets } from "../../assets";
import clientStore from "../../../../stores/clientStore";

function LeftBlock() {
  return (
    <Slide
        direction="right"
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
                
            }}
        >
            <FullSizeBlock />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: clientStore.isMobile ? 'column':'row',
                    minWidth: "100%",
                    gap: 1,
                }}
            >
                <MiniBlock 
                    titleText={'Защита учётных записей'}
                    titeTextColor={'white'}
                    backgroundImageUrl={assets.usbBackgroundImage}
                    linkIcon={true}
                />
                <MiniBlock 
                    titleText={'Социальные сети'}
                    titleTextWrap={'wrap'}
                    titleTextBackgroundColor={'white'}
                    titeTextColor={'black'}
                    titleLogoUrl={assets.titleLogoIcon}
                    socials={true}
                    backgroundImageUrl={firstContentBlockAssets.socialsBlockBackgroundImage}
                />
                
            </Box>
        </Box>
    </Slide>
  )
}

export default observer(LeftBlock)
