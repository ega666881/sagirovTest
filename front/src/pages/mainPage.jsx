import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { Box, useMediaQuery } from '@mui/material'
import FirstBlock from '../components/firstContentBlock/firstBlock';
import SecondContentBlock from '../components/secondContentBlock/secondContentBlock';
import Header from '../components/header/header'
import clientStore from '../stores/clientStore';
import contentStore from '../stores/contentBlocks/contentStore';



function MainPage() {
    useEffect(() => {
        contentStore.getTexts()
    }, [])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                maxWidth: '100%',
                overflowX: 'hidden',
                padding: 2,
                overflowY: clientStore.isMobile ? 'auto':'hidden',
            }}
        >
            <Header />
            <FirstBlock />
            <SecondContentBlock />
      </Box>
    )
}

export default observer(MainPage)
