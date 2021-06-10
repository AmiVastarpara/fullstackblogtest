import React, {useEffect, useState} from "react";
import { useParams} from 'react-router-dom';
import {fetchAuthorById} from "../../redux/actions/author";
import {makeStyles} from "@material-ui/core/styles";
import {Card, Avatar, CardHeader, Select, Divider, Button, TextField, Modal} from "@material-ui/core";
import CustomCard from "../../component/CustomCard";
import {addPost} from '../../redux/actions/post'

const useStyles = makeStyles(() => ({
    root: {
        display:"flex",
        flexDirection:"column",
        height:'100vh',
    },
    infoCard:{
        width:'100%',
        height:'30%',
        backgroundColor: '#d9daf1',
        '&:hover': {
            boxShadow: '-12px 12px 64px 0 #bcc3d6',
        },
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    authorAvtar:{
        height:"100px",
        width:"100px",
        borderRadius:"50%",
        backgroundColor: '#122230',
        textAlign:"center",
        alignItems:"center",
        textTransform:"uppercase"
    },
    postList:{
        width:'100%',
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        marginTop:10
    },
    actionDiv:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        padding:"20px"
    },
    pagination:{
        display:"flex",
        flexDirection:"row",
        paddingLeft:"10px"
    },
    modalDiv:{
        backgroundColor:"white",
        height:"40%",
        width:"35%",
        display:"flex",
        marginTop:'20vh',
        marginBottom:'20vh',
        marginLeft:'20vw',
        borderRadius:10,
        flexDirection:"column",
        justifyContent:"space-between"
    },
    modalBody:{
        display:"flex",
        flexDirection:"column"
    },
    modalHeader:{
        backgroundColor:"silver",
        height:"40px",
        width:"100%",
        textAlign:"center",
        paddingTop:"2vh",
        marginBottom:"2vh"
    }
}));

const Author = ()=>{
    const {id} = useParams();
    const [authorData,setAuthorData] = useState({});
    const [authorPosts, setAuthorPosts] = useState([]);
    const [sortedBy, setSortedBy] = useState("");
    const [pagination,setPagination] = useState({
        start:0,
        end:10,
        increment:10,
        pageIndex:1
    })

    const [openPostModal,setOpenPostModal] = useState(false);
    const [newPostData, setNewPostData] = useState({
        title:"",
        description:""
    });

    const classes = useStyles();
    useEffect(()=>{
        fetchAuthorById(id).then((data)=>{
            var authorInfo = Object.assign({}, data, );
            delete authorInfo.posts;
            setAuthorData({
                ...authorInfo
            });
            setAuthorPosts([...data.posts]);
        }).catch((err)=>{
            console.log(err);
        })
    },[id]);
    const openAddPost = ()=>{
        alert("add new Post");
    }

    const handleClose = ()=>{
        setOpenPostModal(false)
    }
    const submitPostClicked = async ()=>{
        const newPost = await addPost({...newPostData,profileId:id});
        setAuthorPosts([...authorPosts,{...newPost}]);
        setOpenPostModal(false);
    }
    return<div className={classes.root}>
                <Card className={classes.infoCard}>
                    <Avatar className={classes.authorAvtar}>
                        {authorData?.name?.charAt(0)}
                    </Avatar>
                    <CardHeader
                        title={authorData.name}
                        subheader={authorData.email}
                    />
                </Card>
        <div>
            <Button variant="contained" color="primary" onClick={()=>{
                setOpenPostModal(true)
            }
            }>Add New Post</Button>
        </div>
        <div className={classes.actionDiv}>
            <div>
                Sorted By:
                <Select style={{width:"200px"}}
                    onChange={(event)=>{setSortedBy(event.target.value)}}
                        value={sortedBy} >
                    <option value="">Select Option</option>
                    <option value={"publishedDate"}>Published Date</option>
                    <option value={"noOfLike"}>Number Of Like</option>
                </Select>

            </div>
            {/*<div className={classes.pagination}>*/}
            {/*    <Button>{"<"}</Button>*/}
            {/*    */}
            {/*    <Button>{">"}</Button>*/}
            {/*</div>*/}
        </div>
        <Divider/>
        <div style={{textAlign: "center"}}>All Posts</div>
            <div className={classes.postList}>
                {
                    authorPosts && authorPosts.map((post,index)=>{
                        return <CustomCard key={index} id={post.id} path="posts" title={post.title} />
                    })

                }
            </div>
        <Modal
            open={openPostModal}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className={classes.modalDiv}>
                <div className={classes.modalBody}>
                    <div className={classes.modalHeader}>
                        Add Post
                    </div>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        name="title"
                        id="title"
                        label="Title"
                        value={newPostData.title}
                        onChange={(event)=>{
                            setNewPostData({...newPostData,title:event.target.value});
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        name="description"
                        id="description"
                        label="Description"
                        value={newPostData.description}
                        onChange={(event)=>{
                            setNewPostData({...newPostData,description:event.target.value});
                        }}
                    />
                </div>
                <Button onClick={()=>{
                    submitPostClicked();
                }} variant="contained" color="primary">Submit Post</Button>
            </div>
        </Modal>
        </div>;
}

export default Author;
