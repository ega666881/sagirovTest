import { useState } from 'react'
import { observer } from 'mobx-react'
import { Box, Button, Collapse, TextField, Typography, useMediaQuery } from '@mui/material'
import adminPageStore from '../../../stores/adminStores/adminPageStore'
import addNavButtonStore from '../../../stores/adminStores/addNavButtonFormStore'





function NavButtonCard({button}) {
    console.log(button?.isCreating)
    const [isEdit, setEdit] = useState(button?.isCreating)


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 5,
                padding: 2,
                maxWidth: "100%",
                backgroundColor: '#E9EDF3',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: "100%"
                }}
            >
                <Box>
                    <Typography
                        variant='h2'
                    >
                        {button?.title}
                    </Typography>
                    <Typography>
                        Положение в списке: {button?.index} 
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1
                    }}
                >
                    <Button
                        variant='contained'
                        sx={{
                            padding: 1,
                        }}
                        onClick={() => setEdit(prev => !prev)}
                    >
                        <Typography>
                            Изменить
                        </Typography>
                    </Button>
                    <Button
                        variant='contained'
                        sx={{
                            backgroundColor: 'red',
                            padding: 1,
                        }}
                        onClick={() => adminPageStore.deleteNavButton(button.id)}
                    >
                        <Typography>
                            Удалить
                        </Typography>
                    </Button>
                </Box>
            </Box>
            <Collapse
                in={isEdit}
            >
                {isEdit && (
                    <Box>
                        <Typography>
                            Введите новое название:
                        </Typography>
                        <TextField
                            onChange={(e) => addNavButtonStore.setFormData('title', e.target.value)}
                            defaultValue={button.title}
                        />
                        <Typography>
                            Укажите положение в списке:
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 1,
                            }}
                        >
                            <TextField
                                defaultValue={button.index}
                                type='number'
                                onChange={(e) => addNavButtonStore.setFormData('index', e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                    adminPageStore.updateText(button.id, e.target.value)
                                    setEdit(false)
                                    }
                                }}
                            ></TextField>
                            <Button
                                variant='contained'
                                onClick={() => {
                                    if (button.isCreating) {
                                        addNavButtonStore.createNavButton()

                                    } else {
                                        addNavButtonStore.setFormData('id', button.id)
                                        addNavButtonStore.updateNavButton()
                                    }
                                    setEdit(false)
                                }}
                            >
                                Сохранить
                            </Button>
                        </Box>
                    </Box>
                )}
            </Collapse>
        </Box>
    )
}

export default observer(NavButtonCard)
