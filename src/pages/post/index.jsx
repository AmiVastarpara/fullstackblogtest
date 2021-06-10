import React, {useEffect, useState} from "react";
import { fetchPostById} from '../../redux/actions/post';
import PostCard from './postCard'
import {useParams} from "react-router-dom";
import {fetchAuthorById, } from "../../redux/actions/author";
import {makeStyles} from "@material-ui/core/styles";
import CustomCard from "../../component/CustomCard";
import {Button} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        display:"flex",
        flexDirection:'column'
    },
    commentList:{
        width:'100%',
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap"
    }
}));

 const Posts = ()=>{
     const {id} = useParams();
    const [postData,setPostData] = useState({});
    const [authorData,setAuthorData] = useState({});
    const classes = useStyles();
    useEffect(()=>{
        fetchPostById(id).then((data)=>{
            setPostData({...data});
        }).catch((err)=>{
            console.log(err);
        })
    },[id]);
    useEffect(()=>{
        if(postData.profileId){
            fetchAuthorById(postData.profileId).then((data)=>{
                setAuthorData({...data});
            }).catch((err)=>{
                console.log(err);
            })
        }

    },[postData]);
    const addCommentInList = (newComment)=>{
        setPostData({
            ...postData,
            comments:[...postData.comments,{...newComment}]
        })
    }
    const addLikeInList = (newLike)=>{
        setPostData({
            ...postData,
            likes:[...postData.likes,{...newLike}]
        })
    }
       return  <div className={classes.root}>
            {(postData) && <PostCard totalLikes = {postData.likes.length} addCommentInList={(newComment)=>{addCommentInList(newComment)}} addLikeInList={(newLike)=>{addLikeInList(newLike)}} id={postData.id} authorId={postData.profileId} title={postData?.title} authName={authorData?.name} description={postData?.description} ></PostCard>}
           <div style={{textAlign: "center",marginTop:"20px"}}>All Comments</div>
            <div className={classes.commentList}>
                {
                    (postData?.comments) && postData.comments.map((data,index)=>{
                        return <CustomCard key={index} id={data.id} path={null} title={data.body} />
                    })
                }
            </div>
        </div>
    ;
}

export default Posts;
