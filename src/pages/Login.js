import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { Paper, Avatar } from '@material-ui/core'
import  Styles  from './styles/Login.styles'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'


function Login () {
      const classes = Styles

  return (
    <div>
        <Grid container component="main" className={classes.root}>
             <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container} >
                  <div className={classes.div}>
                <Avatar className={classes.avatar}>
                       <LockOutlinedIcon/>
                </Avatar>

                  </div>
             </Container>
        </Grid>
    </div>
  )
}
export default Login