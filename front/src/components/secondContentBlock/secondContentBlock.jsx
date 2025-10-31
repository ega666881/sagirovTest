import { observer } from "mobx-react";
import { Box, Grow, Slide, Typography } from "@mui/material";

import clientStore from "../../stores/clientStore";
import MiniBlock from "../sharedComponents/miniBlock";
import { secondBlockAssets } from "./assets";
import PopularsCategory from "./popularsCategory";
import useOnScreen from "./useOnScreen";
import { useRef } from "react";


function SecondBlock() {
    const ref = useRef(null)
    const isVisible = useOnScreen(ref, { threshold: 0.1 })

    return (
            <Box
                
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    flex: 1,
                    width: "97%",
                    gap: 2,
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginTop: 2,
                    padding: 2,
                }}
            >
                <Typography
                    sx={{
                        display: 'flex',
                        alignSelf: 'start',
                        textAlign: 'start',
                        fontSize: {
                            xs: '1rem', 
                            sm: '1.25rem',
                            md: '1.5rem',  
                            lg: '1.75rem',
                            xl: '3rem', 
                        },
                    }}
                >
                    Товары, которые покупают чаще всего
                </Typography>
                <Box
                    ref={ref}
                    sx={{
                        display: 'flex',
                        flexDirection: clientStore.isMobile ? 'column':'row',
                        maxWidth: '100%',
                        
                        
                        gap: 1,
                    }}
                >
                    <Slide
                        in={isVisible}
                        direction="right"
                        timeout={{
                            enter: 800
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                            }}
                        >
                            <MiniBlock 
                                titleText={"Аппаратные кошельки"}
                                titleLeftLogoUrl={secondBlockAssets.lockIcon}
                                backgroundImageUrl={secondBlockAssets.nativeWalletsImage}
                                linkIcon={true}
                            />
                            <MiniBlock 
                                titleText={"U2F-токены"}
                                titleLeftLogoUrl={secondBlockAssets.lockIcon}
                                backgroundImageUrl={secondBlockAssets.u2ftokensImage}
                                linkIcon={true}
                            />
                        </Box>
                    </Slide>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Grow
                            in={isVisible}
                            timeout={{
                                enter: 800
                            }}
                        >
                            <Box>
                                <MiniBlock 
                                    titleText={"Устройства для записи seed"}
                                    bottomText={"Надежные устройства для хранения мнемонической фразы, необходимой для восстановления доступа к вашим средствам"}
                                    titleLeftLogoUrl={secondBlockAssets.lockIcon}
                                    backgroundImageUrl={secondBlockAssets.defaultBackgroundImage}
                                    linkIcon={true}
                                />
                                <PopularsCategory />
                                <MiniBlock
                                    titleLeftLogoUrl={secondBlockAssets.lockIcon}
                                    titleText={"Кабели и переходники"}
                                    bottomText={"Большой выбор кабелей и переходников для удобного использования ваших устройств"}
                                    backgroundImageUrl={secondBlockAssets.defaultBackgroundImage}
                                    linkIcon={true}
                                />
                            </Box>
                        </Grow>
                    </Box>
                    <Slide
                        in={isVisible}
                        direction="left"
                        timeout={{
                            enter: 800
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                            }}
                        >
                            <MiniBlock
                                titleLeftLogoUrl={secondBlockAssets.lockIcon}
                                titleText={"Аксессуары"}
                                backgroundImageUrl={secondBlockAssets.accessoriesImage}
                                linkIcon={true}
                            />
                            <MiniBlock 
                                titleLeftLogoUrl={secondBlockAssets.lockIcon}
                                titleText={"Чехлы и кейсы"}
                                backgroundImageUrl={secondBlockAssets.casesImage}
                                linkIcon={true}
                            />
                        </Box>
                    </Slide>
                </Box>         
            </Box>
    )
}

export default observer(SecondBlock)
