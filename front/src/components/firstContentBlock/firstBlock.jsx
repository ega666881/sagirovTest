import { observer } from "mobx-react";
import { Box, Grow } from "@mui/material";

import clientStore from "../../stores/clientStore";
import LeftBlock from "./components/leftBlock/leftBlock";
import RightBlock from "./components/rightBlock/rightBlock";

function FirstBlock() {
  return (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flex: 1,
            width: "97%",
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 2,
            backgroundColor: "#E9EDF3",
            padding: 2,
            paddingRight: clientStore.isMobile ? 3:2,
            
            borderRadius: 10,
        }}
    >
        <Box
            sx={{
                display: 'flex',
                flexDirection: clientStore.isMobile ? 'column':'row',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
                padding: 1,
                minWidth: "100%"
            }}
        >
            {[
                <LeftBlock />,
                <RightBlock />
            ].map(Component => (
                <Box
                    sx={{
                        width: "100%",
                        alignSelf: 'start',
                        display: 'flex',
                        flexDirection: 'column',
                        
                    }}
                >
                    {Component}
                </Box>
            ))}
        </Box>

    </Box>
  )
}

export default observer(FirstBlock)
