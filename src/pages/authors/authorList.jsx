import React from "react";
import {Link} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import {Card, CardHeader, Avatar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CustomCard from "../../component/CustomCard";
const useAuthorStyles = makeStyles((theme) => ({
    root: {
        width:'100%',
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap"
    },
}));
const AuthorList = (props)=>{
    const classes = useAuthorStyles();
    const {authorList} = props;
    return <div className={classes.root}>
        {
            (authorList.length === 0 )?<Skeleton count={10}/>: authorList.map((data,index)=>{
                return (
                    <CustomCard key={index} id={data.id} path="author"
                                title={data.name} />
                );
            })
        }
    </div>;
}

export default AuthorList;
