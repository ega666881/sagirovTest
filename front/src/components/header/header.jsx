import { observer } from "mobx-react";
import { Box, Slide } from "@mui/material";
import { assets } from "../../utils/mediaManager";
import NavBar from "./navBar";
import EndIcons from "./endIcons";
import clientStore from "../../stores/clientStore";
import { useEffect } from "react";


function Header() {

    
    return (
        <Slide
            direction="down"
            in={true}
            timeout={{
                enter: 900,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: clientStore.isMobile ? 'column':'row',
                    alignItems: 'center',
                    gap: 1
                }}
            >
                <Box>
                    <img src={assets.logoIcon} width={"100%"}/>
                </Box>
                <NavBar />
                <EndIcons />
            </Box>
        </Slide>
    )
}

export default observer(Header)
