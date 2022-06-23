import { red } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'



export default makeStyles = makeStyles(theme=>({
    root:{ 
        color: red
    },
    container: {
        opacity: '0.8',
        height: "60%",
        marginTop: theme.spacing(10)
    },
    div:  {
        margin: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main
    }

}))