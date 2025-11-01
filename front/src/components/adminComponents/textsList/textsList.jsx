import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { Box, Typography, useMediaQuery } from '@mui/material'

import contentStore from '../../../stores/contentBlocks/contentStore';
import TextCard from './textCard';
import clientStore from '../../../stores/clientStore';




function TextsLists() {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxHeight: clientStore.isMobile ? '50vh':'90vh',
                maxWidth: clientStore.isMobile ? "100%":"50%",
            }}
        >
            <Typography
                variant='h1'
            >
                Список текстов
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    
                    overflowY: 'auto'
                }}
            >
                {contentStore.texts.map(text => <TextCard text={text} />)}
            </Box>
        </Box>
    )
}

export default observer(TextsLists)
