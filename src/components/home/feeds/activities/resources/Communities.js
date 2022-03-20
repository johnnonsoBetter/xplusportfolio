import { Box, ButtonBase, Grid, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react' 
import { AuthContext } from '../../../../../context/AuthContext'
import { FetchContext } from '../../../../../context/FetchContext'
import ResourcesLoader from './ResourcesLoader'



export default function Communities() {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [communities, setCommunites] = useState([])

    useEffect(() => {

        document.title = "Communities"


        authAxios.get('api/v1/resources',  {params: {resources_type: 'community'}}).then(res => {

            setCommunites(res.data)
            setLoading(false)
        }).catch(err => {
            setSomethingWentWrong(true)
        })

        return () => {
            setSomethingWentWrong(false)
            setCommunites([])
        }
    }, [])

    

    return (
        <Box m={2} >
        <Typography variant='h6' marginBottom={1}  textAlign='left' > Communities </Typography>
        <Typography variant='body2' textAlign='left' marginBottom={3}   >

        If you like helping people solve problems, find forums that allow you to do so. Or if you want to share the backstory on a piece of code, write a blog. It’s often as simple as finding something that you think could be better and trying to solve it. It’s like an itch that needs to be scratched
        </Typography>

        <Grid container spacing={4} >
            <Grid item xs={12} sm={6} >
                <ButtonBase >

                <Paper sx={{borderRadius: '12px' }} >
                    <Box p={3} sx={{borderTopRightRadius: '12px',borderTopLeftRadius: '12px',  background: 'linear-gradient(86deg, rgba(7,3,124,1) 5%, rgba(242,242,242,1) 100%, rgba(0,212,255,1) 100%)'}} minHeight={150} display='flex' alignItems='center' justifyContent='center' >
                        <img style={{maxWidth: "100%"}} src='https://andela.com/wp-content/uploads/2016/01/Andela-logo-landscape-blue-400px.png' />
                    </Box>
                    <Box p={1}  >
                    <Typography variant='body1' marginBottom={1}  textAlign='left' > ALC </Typography>
                    <Typography variant='body2' sx={{maxHeight: 100, overflow: 'hidden'}}  textAlign='left' marginBottom={3}   >

                        If you like helping people solve problems, find forums that allow you to do so. Or if you want to share the backstory on a piece of code, write a blog. It’s often as simple as finding something that you think could be better and trying to solve it. It’s like an itch that needs to be scratched
                    </Typography>
                    </Box>
                </Paper>


                </ButtonBase>
                
            </Grid>

            <Grid item xs={12} sm={6} >
                <ButtonBase >

                <Paper sx={{borderRadius: '12px' }} >
                    <Box p={3} sx={{borderTopRightRadius: '12px',borderTopLeftRadius: '12px',  background: 'linear-gradient(90deg, rgba(222,222,222,1) 5%, rgba(242,242,242,1) 100%, rgba(0,212,255,1) 100%)'}} minHeight={150} display='flex' alignItems='center' justifyContent='center' >
                        <img height="100%" style={{maxWidth: "100%"}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADgCAMAAADCMfHtAAAAdVBMVEX///8AAAD8/PxTU1PY2Njq6uoYGBjf39/U1NQtLS3v7+/R0dFfX1/GxsaOjo7Ozs46Ojp1dXWdnZ2qqqokJCRaWlr39/dHR0e7u7tAQEC0tLSXl5dKSkpzc3Ojo6MyMjILCwt+fn5paWmJiYkWFhZ0dHQnJyftERG6AAAFBUlEQVR4nO2a63qyOhBGMaBRrPUcKWoR7Pb+L3ELCQjhFBJa8Hve9UdRiLMgmQwRywIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBRQoYOwACiGPz7OvoXW4XL9m0VdxMlLmzoQLVRM/wYOkwDlAyvQ0dpgorh59BBGqFg+D10jGa0G+6HDtGQVkPvjafChDbD5dABGtNsGNCh4zOn0TB833n+RYPhkb5zOZpRZ7i4O0OH1hP+8aNEdPdq9eouapeLTb3VdLS9w53W4Kq3cX52kZv/ezE2I59Zefs8mVXSoS7w+TBYG8eqCT3bXy+ismEN6oYBPyDqN25FiGxQmu97MBQHbHqNXJmwGPa9opf2dQ2HuSNbSTNGecLvwdDjBwwyGbmLYtSr8i6fdYbKt1gkmYJnw+TSezHoqn40dQQiI3picz7t8Dt0te4wufTIuij4UxV0Ni4d7b6WrF8OMt+zoGjY3I/mA44mPYjcR+3m/WVDtl4+mYstGm+seSeYx++Xz4tG/b3vpnvyCd9NvosbWe+u112hCngewbzd586L8x0/xuxWx5FSR8vAkg1FGma8+0XJxj15/5O8d+lJ7C9+KNmR59VNml8ni/wETCPxaTS1lGJqhkh5tC03yoZ8EB/E+NomW3yNjjcszsDzhozmDPmn9vfrd9P8Tax9LhqRIozykzQNtFYcHQ1nQYPh7Jb75fQ6FW7rbuaGch+dtx3Q9RpOGgwLhPHnRE7sxobkVGyqfQ341wxvLDE8ZNt9GBL5Tj9oT1oahrdoa9cYRg6j6ThJEqooKCYhZYxuza8hlc5jRblmbpjmrgrDK4nnBnGavfiLr/Q9yfvqX8NLUXCrcExnw6yAqDDka5buLNmIa/gp//yeHhMaGubzchymq1BUdTW0szbLhhs+KIidGQrzbP6jRoZE7qNKZX9Xw112ZNnwIr45Zoa8Wx7SdEAsM0Mpj34olcWdZ/wGw1ON4aInQ3nFVK00qjFkdYavklPF0JOMXBNDJgkq3spWG9746REjSt9QtJ6Nl72JYa4mjNko3rrJhmI7SfVpKtQ3FL3yRyiJ9jQNpYqbahqKuA/xRWQnY8P/+E6zpHpcp3WNlmF6eib5oDQMWXqmrp9hsTEtwyy/f4XbTRadlmGxMlQo12oMrXBSwsBQvh83MPQLTSiUa3WG8qxqaCiSVQ+GhXpGpVyrM8wvpd5Mc+kTFr3am5wNDPOz4aFDC2VD8rqJXt5zho92Q1JhaJH9LG3PYwaG+cnC63Ccc9g8WRT+519+JM1cp9Z5EX/JKzU7eL5/vG6pKT8yGfHreL9APFNGrvGeh1fRSFZ3e/N19Vk642utROXGoenDa/GVmDr6q0VEes3h9GNotJLVL8Ri9NvObp5ET9torSO/DMf0cBcNg3xeYHxNI9RqKzM8te/7d4hsdOTd0uXju8NcliczHNezQWI2DHzHWZ7FqpR6OVIgNRzZE5YV9YPanXkZYbhQfaL9r/guCXYoRwoIw/E9oCcraj9K76dZamTXkFjrTc7voP+fcbJe8BjmL9kWiBfxmvZx9A3+V0sMu5RrfwqjjuNQs/MfGw7z8M5f4Y2rXPsFvPd/VL0Fb1zl2i+wGlm51j/evX2f98b5Fx5WBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACq+B+lvzvhILXb5AAAAABJRU5ErkJggg==' />
                    </Box>
                    <Box p={1}  >
                    <Typography variant='body1' marginBottom={1}  textAlign='left' > ALC </Typography>
                    <Typography variant='body2' sx={{maxHeight: 100, overflow: 'hidden'}}  textAlign='left' marginBottom={3}   >

                        If you like helping people solve problems, find forums that allow you to do so. Or if you want to share the backstory on a piece of code, write a blog. It’s often as simple as finding something that you think could be better and trying to solve it. It’s like an itch that needs to be scratched
                    </Typography>
                    </Box>
                </Paper>


                </ButtonBase>
                
            </Grid>
        </Grid>
        </Box>
       
    )
}





