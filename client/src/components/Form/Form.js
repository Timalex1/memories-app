import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import makeStyles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'

const Form = ({ currentId, setCurrentId }) => {

    const emptyState = { creator: '', title: '', message: '', tags: '', selectedFile: '' }

    const [postData, setPostData] = useState({
        emptyState
    })

    const post = useSelector((state) => currentId ? state.posts.find(p => p._id === currentId) : null)

    useEffect(() => {
        console.log(post)

        if (post) {
            // console.log(post)
            setPostData(post);
        }
    }, [post])

    const dispatch = useDispatch();

    const classes = makeStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData))
        }
        else {
            dispatch(createPost(postData))
        }

        clear()
    }

    const clear = () => {

        setCurrentId(null)
        setPostData(emptyState)
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    {currentId ? `Editing` : `Creating`} a Memory
                </Typography>
                <TextField variant="outlined"
                    name="creator"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />

                <TextField variant="outlined"
                    name="title"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField variant="outlined"
                    name="message"
                    label="Message"
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />

                <TextField variant="outlined"
                    name="tags"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                />

                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button className={classes.buttonSubmit} size="large" variant="contained" color="primary" type="submit" fullWidth>Submit</Button>
                <Button size="small" variant="contained" color="secondary" fullWidth onClick={clear}>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form
