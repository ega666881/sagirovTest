import { observer } from "mobx-react";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import navBarStore from "../../stores/navBarStore";
import clientStore from "../../stores/clientStore";

function NavButton({button}) {
    
    

    return (
        <Button
            sx={{
                display: 'flex',
                flex: 1,
                
                minWidth: clientStore.isMobile ? "40%":0,
                borderRadius: 10,
                backgroundColor: navBarStore.getStylesButton(button.id).backgroundColor
            }}
            onClick={() => navBarStore.setActiveButton(button.id)}
        >
            <Typography
                sx={{
                    color: navBarStore.getStylesButton(button.id).textColor,
                    fontSize: 12,
                    
                }}
            >
                {button.title}
            </Typography>
        </Button>
    )
}

export default observer(NavButton)
