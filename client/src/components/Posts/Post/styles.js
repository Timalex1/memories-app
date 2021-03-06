import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({

    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        padding: '0 16px'
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px'
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white'
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative'
    },
    fullWeightCard: {
        height: '100%'
    },
    border: {
        border: 'solid'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        backgroundBlendMode: 'darken'
    }
}))