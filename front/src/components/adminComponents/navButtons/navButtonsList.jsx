import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'

import contentStore from '../../../stores/contentBlocks/contentStore';

import clientStore from '../../../stores/clientStore';
import navBarStore from '../../../stores/navBarStore';
import NavButtonCard from './navButtonCard';




function NavButtonsList() {

    useEffect(() => {}, [navBarStore.buttons])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxHeight: clientStore.isMobile ? '50vh':'90vh',
                maxWidth: clientStore.isMobile ? "100%":"100%",
                minWidth: "50%"
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: "100%",
                }}
            >
                <Typography
                    variant='h1'
                    sx={{
                        width: "100%"
                    }}
                >
                    Список кнопок меню
                </Typography>
                <Button
                    variant='contained'
                    sx={{
                        backgroundColor: 'green'
                    }}
                    onClick={() => navBarStore.addNavButton({
                        title: 'Новая кнопка',
                        index: 0,
                        isCreating: true
                    })}
                >
                    <Typography>
                        Добавить
                    </Typography>
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    
                    overflowY: 'auto'
                }}
            >
                {navBarStore.buttons.map(button => <NavButtonCard button={button} />)}
            </Box>
        </Box>
    )
}

export default observer(NavButtonsList)
