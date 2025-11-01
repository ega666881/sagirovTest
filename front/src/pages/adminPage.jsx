import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { Box, useMediaQuery } from '@mui/material'


import TextsList from '../components/adminComponents/textsList/textsList';
import contentStore from '../stores/contentBlocks/contentStore';
import navBarStore from '../stores/navBarStore';
import clientStore from '../stores/clientStore';
import NavButtonsList from '../components/adminComponents/navButtons/navButtonsList';




function AdminPage() {
    useEffect(() => {
        contentStore.getTexts()
        navBarStore.getNavButtons()
    }, [])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: clientStore.isMobile ? 'column':'row',
                width: "100%",
                gap: 2,
                overflowX: 'hidden',
            }}
        >
            <TextsList />
            <NavButtonsList />
      </Box>
    )
}

export default observer(AdminPage)
