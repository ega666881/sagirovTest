import { observer } from "mobx-react";
import { Box, Typography } from "@mui/material";
import { assets } from "../../utils/mediaManager";
import clientStore from "../../stores/clientStore";
import { firstContentBlockAssets } from "../firstContentBlock/assets";

function MiniBlock({
    backgroundImageUrl,
    titleText,
    titeTextColor,
    titleFontSize,
    bottomText,
    titleTextWrap = 'nowrap',
    titleTextBackgroundColor,
    titleLogoUrl,
    titleLeftLogoUrl,
    linkIcon = false,
    socials = false,
    readLink = false
}) {
  return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            flex: 1,
            borderRadius: 5,
        }}
    >
    <img src={backgroundImageUrl} width="100%" style={{ borderRadius: '20px' }} />

    <Box
        sx={{
            position: 'absolute',
            top: 8,
            left: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
        }}
    >
        <Box
            sx={{
                padding: 1,
                display: 'flex',
                minWidth: 0,
                flex: 1,
                gap: 1,
                alignItems: 'center',
                maxWidth: '100%',
                borderRadius: 5,
                backgroundColor: titleTextBackgroundColor,
            }}
        >
        <img src={titleLeftLogoUrl} />
        <Typography
            sx={{
                maxWidth: '100%',
                fontSize: titleFontSize,
                color: titeTextColor,
                textAlign: 'center',
                whiteSpace: titleTextWrap === 'nowrap' ? 'nowrap' : undefined,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }}
        >
            {titleText}
        </Typography>
        </Box>
        {titleLogoUrl && <img src={titleLogoUrl} alt="" />}
    </Box>


    {socials && (
        <Box
            sx={{
                position: 'absolute',
                bottom: 8,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                width: "90%",
                
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
            }}
        >
        <Box sx={{ display: 'flex', gap: 1 }}>
            <img src={firstContentBlockAssets.telegramIcon} alt="Telegram" />
            <img src={firstContentBlockAssets.youtubeIcon} alt="YouTube" />
        </Box>
        <Box
            sx={{
                display: 'flex',
                borderRadius: 15,
                backgroundColor: 'white',
                padding: 1,
                alignItems: 'center',
            }}
        >
            <Typography sx={{ color: '#17BE79' }}>shop@cryptoro.ru</Typography>
        </Box>
        </Box>
    )}


    {linkIcon && (
        <Box
            sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: '#17BE79',
                borderRadius: 5,
                padding: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
        <img src={assets.strokeArrow} alt="Arrow" />
        </Box>
    )}
    {bottomText && (
        <Box
            sx={{
                width: "80%",
                position: 'absolute',
                bottom: 8,
                padding: 2,
                alignSelf: 'center',
                justifySelf: 'center',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
        <Typography
            sx={{
                width: "100%",
            }}
        >
            {bottomText}
        </Typography>
        </Box>
    )}
    </Box>
  )
}

export default observer(MiniBlock)
