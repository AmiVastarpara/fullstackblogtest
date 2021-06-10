import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Avatar, CssBaseline, TextField, Link, Grid, Box, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { addAuthor } from '../../redux/actions/author'


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const AuthorAddForm = (props)=>{
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:""
    })
    const classes = useStyles();
    const changeHandler = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const submitAuthor = async ()=>{
        await addAuthor(formData);
    }
    return (<Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Register New Author
            </Typography>
                <form className={classes.form} >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Author Name"
                                name="name"
                                autoComplete="userName"
                                autoFocus
                                value={formData.name}
                                onChange={(e)=>{changeHandler(e)}}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="email"
                                id="email"
                                label="Email"
                                value={formData.email}
                                type="email"
                                onChange={(e)=>{changeHandler(e)}}
                            /><TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="phone"
                                id="phone"
                                label="Phone Number"
                                value={formData.phone}
                                onChange={(e)=>{changeHandler(e)}}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={()=>submitAuthor()}
                                href={"/"}
                            >
                                Register
                            </Button>
                        </form>

        </div>
    </Container>);
}

export default AuthorAddForm;
