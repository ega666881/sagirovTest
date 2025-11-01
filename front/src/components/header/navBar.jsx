import { observer } from "mobx-react";
import { Box } from "@mui/material";
import { assets } from "../../utils/mediaManager";
import navBarStore from "../../stores/navBarStore";
import NavButton from "./navButton";
import clientStore from "../../stores/clientStore";
import { useEffect } from "react";

function NavBar() {

    useEffect(() => {
        navBarStore.getNavButtons()
    }, [])

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: "#E9EDF3",
                borderRadius: 10,
                padding: 2,
                width: clientStore.isMobile ? "100%":"50%",
                maxWidth: clientStore.isMobile ? "100%":"50%",
                overflowX: 'auto',
                gap: 1
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flex: 1,
                }}
            >
                {navBarStore.buttons.map(button => <NavButton button={button} />)}
            </Box>
        </Box>
    )
}

export default observer(NavBar)
