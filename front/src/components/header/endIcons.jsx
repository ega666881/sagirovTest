import { observer } from "mobx-react";
import { Box, Button } from "@mui/material";
import navBarStore from "../../stores/navBarStore";
import NavButton from "./navButton";
import { assets } from "../../utils/mediaManager";

function EndIcons() {
  return (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
            gap: 1,
            
        }}
    >
       {
        [
            assets.searchIcon,
            assets.favoritesIcon,
            assets.shopCartIcon
        ].map(iconUrl => (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 2,
                    backgroundColor: "#17BE79",
                    borderRadius: '100%',
                }}
            >
                <img src={iconUrl} width={20}/>
            </Box>
        ))
       }
    </Box>
  )
}

export default observer(EndIcons)
