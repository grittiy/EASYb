import {
    Box,
    Container,
    Grid,
    Typography,
    Stack,
    Select,
    MenuItem
} from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <Box sx={{ color: 'common.grey' }}>
            <Container maxWidth="xl" sx={{ py: 6 }}>
                <Stack spacing={4}>

                    <Typography >
                        Questions? call 007-803-321-2130
                    </Typography>

                    <Box>
                    <Grid container spacing={4}>
                        <Grid item xs={6} md={3}>
                            <Stack spacing={2}>
                                <Typography variant="caption" component="a" href="#">
                                    FAQ
                                </Typography>

                                <Typography variant="caption" component="a" href="#">
                                    Invastor Relations
                                </Typography>

                                <Typography variant="caption" component="a" href="#">
                                    Privacy
                                </Typography>

                                <Typography variant="caption" component="a" href="#">
                                    Speed Test
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Stack spacing={2}>
                                <Typography variant="caption" component="a" href="#">
                                    Help Center
                                </Typography>

                                <Typography variant="caption" component="a" href="#">
                                    Jobs
                                </Typography>

                                <Typography variant="caption" component="a" href="#">
                                    Cookie Preferences
                                </Typography>

                                <Typography variant="caption" component="a" href="#">
                                    Legal Notices
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Stack spacing={2}>
                                <Typography variant="caption" component="a" href="#">
                                    Account
                                </Typography>

                                <Typography variant="caption" component="a" href="#">
                                    Ways to Watch
                                </Typography>

                                <Typography variant="caption" component="a" href="#">
                                    Corporate Information
                                </Typography>

                                <Typography variant="caption" component="a" href="#">
                                    Only on EASYb
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Stack spacing={2}>
                                <Typography variant="caption" component="a" href="#">
                                    Media Center
                                </Typography>

                                <Typography variant="caption" component="a" href="#">
                                    Terms of Use
                                </Typography>

                                <Typography variant="caption" component="a" href="#">
                                    Contact Us
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                    </Box>


                    <Box >
                        <Select
                            name="lang"
                            variant="outlined"
                            size="small"
                            defaultValue="EN"
                            sx={{
                                borderWidth: '2px',
                                borderStyle: 'solid',
                                borderColor: 'common.black',
                                color: 'black', '& .MuiSelect-icon': {
                                    color: 'common.black'
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none'
                                }
                            }}
                        >
                            <MenuItem value="TH">Thailand</MenuItem>
                            <MenuItem value="EN">English</MenuItem>

                        </Select>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}
