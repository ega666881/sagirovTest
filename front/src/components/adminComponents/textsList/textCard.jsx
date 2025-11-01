import { useState } from 'react'
import { observer } from 'mobx-react'
import { Box, Button, Collapse, TextField, Typography, useMediaQuery } from '@mui/material'
import adminPageStore from '../../../stores/adminStores/adminPageStore'





function TextCard({text}) {
    const [isEdit, setEdit] = useState(false)

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
                <Typography>
                    {text.title}
                </Typography>
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
            </Box>
            <Collapse
                in={isEdit}
            >
                <Typography>
                    Введите новое значние:
                </Typography>
                <TextField
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                           adminPageStore.updateText(text.id, e.target.value)
                           setEdit(false)
                        }
                      }}
                >

                </TextField>
                <Typography>
                    Нажмите Enter что бы применить изменения
                </Typography>
            </Collapse>
        </Box>
    )
}

export default observer(TextCard)
