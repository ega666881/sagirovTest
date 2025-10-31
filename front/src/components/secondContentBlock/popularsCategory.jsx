import { observer } from "mobx-react";
import { Box, Button, Typography } from "@mui/material";
import { secondBlockAssets } from "./assets";
import clientStore from "../../stores/clientStore";



function PopularsCategory() {
  return (
    <Box
        sx={{
            display: 'flex',
            position: 'relative',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            maxHeight: "100%",
            gap: 1,
            
        }}
    >
        <img src={secondBlockAssets.popularsCategoryImage} height={"100%"} width={"100%"}/>
        <Box
            sx={{
                position: 'absolute',
                width: "70%",
                display: 'flex',
                alignSelf: 'center',
                justifySelf: 'center',
                justifyContent: 'center',
                padding: 3,
                backdropFilter: `blur(38.3076057434082px)`,
                background: `rgba(255, 255, 255, 0.25)`,
                borderRadius: 10,
            }}
        >
            <Typography
                sx={{
                    color: 'white',
                    fontSize: clientStore.isMobile ? 20:40,
                    textAlign: 'center'
                }}
            >
                Популярные категории
            </Typography>
        </Box>
    </Box>
  )
}

export default observer(PopularsCategory)
