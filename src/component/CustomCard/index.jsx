import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import {Avatar, Card, CardHeader} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        width:'20%',
        margin:30,
        maxWidth: 345,
        cursor:'pointer',
        textDecoration:"none",
    },
    avatar: {
        backgroundColor: '#122230',
        textTransform: 'uppercase'
    },
}));

const CustomCard = (props)=>{
    const classes = useStyles();
    const {id,path,title} = props;
    return (
        <Link to={ path ? `/${path}/${id}` : "#"} className={classes.root}>
            <Card >
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {title.charAt(0)}
                        </Avatar>
                    }
                    title={title}
                />
            </Card>
        </Link>
    );
}

export default CustomCard;