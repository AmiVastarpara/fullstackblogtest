
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useApexInfoStyles } from '@mui-treasury/styles/info/apex';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useGraphicBtnStyles } from '@mui-treasury/styles/button/graphic';

import {addComment} from '../../redux/actions/comment'
import {addLikes} from '../../redux/actions/likes'
import {TextField} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
        transition: '0.3s',
        position: 'relative',
        '&:before': {
            transition: '0.2s',
            position: 'absolute',
            width: '100%',
            height: '100%',
            content: '""',
            display: 'block',
            backgroundColor: '#d9daf1',
            borderRadius: '1rem',
            zIndex: 0,
            bottom: 0,
        },
        '&:hover': {
            '&:before': {
                bottom: -6,
            },
            '& $card': {
                boxShadow: '-12px 12px 64px 0 #bcc3d6',
            },
        },
    },
    card: {
        zIndex: 1,
        position: 'relative',
        borderRadius: '1rem',
        boxShadow: '0 6px 20px 0 #dbdbe8',
        backgroundColor: '#fff',
        transition: '0.4s',
        height: '100%',
    },
    logo: {
        width: 48,
        height: 48,
        borderRadius: '0.75rem',
        textTransform: 'uppercase'
    },
    avatar: {
        fontFamily: 'Ubuntu',
        fontSize: '0.875rem',
        backgroundColor: '#6d7efc',
    },
    join: {
        background: 'linear-gradient(to top, #638ef0, #82e7fe)',
        '& > *': {
            textTransform: 'none !important',
        },
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

const PostCard = ({id,authorId,
                        title,
                        authName="Sample",
                        description,
                        addCommentInList,
                        addLikeInList,
                        totalLikes
                    }) => {
    const styles = useStyles();
    const btnStyles = useGraphicBtnStyles();
    const [openCommentModal,setOpenCommentModal] = useState(false);
    const [commentText, setCommentText] = useState("");
    const addCommentClicked = async () => {
        const newComment = await addComment({
            body: commentText,
            postId: id,
            profileId: authorId
        });
        addCommentInList(newComment);
        alert("Thank you for adding your comment");
        setOpenCommentModal(false);
    }
    const openCommentModalClicked = () =>{
        setOpenCommentModal(true);
    }
    const addLikeClicked = async () => {
        const newLike =  await addLikes({
            postId:id,
            profileId:authorId
        });
        addLikeInList(newLike);
        alert("Thank you for adding Like");
    }

    const handleClose = ()=>{
        setOpenCommentModal(false)
    }
    return <>
        <div className={styles.root}>
            <Column className={styles.card}>
                <Row p={2} gap={2}>
                    <Avatar className={styles.logo} variant={'rounded'} >
                        {
                            authName.charAt(0)
                        }
                    </Avatar>
                    <Info position={'middle'} useStyles={useApexInfoStyles}>
                        <InfoTitle>{title}</InfoTitle>
                        <InfoSubtitle>Created By {authName}</InfoSubtitle>
                    </Info>
                </Row>
                <Box
                    pb={1}
                    px={2}
                    color={'grey.600'}
                    fontSize={'0.875rem'}
                    fontFamily={'Ubuntu'}
                >
                    {description}
                </Box>
                <Row p={2} gap={2} position={'bottom'}>
                    <Item>
                        <IconButton aria-label="add to favorites" onClick={()=>{addLikeClicked()}}>
                            <FavoriteIcon />
                        </IconButton>
                        {totalLikes}
                    </Item>
                    <Item position={'middle-right'}>
                        <Button
                            className={styles.join}
                            classes={btnStyles}
                            variant={'contained'}
                            color={'primary'}
                            disableRipple
                            onClick={()=>openCommentModalClicked()}
                        >
                            Comment
                        </Button>
                    </Item>
                </Row>
            </Column>
        </div>
        <Modal
            open={openCommentModal}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className={styles.modalDiv}>
                <div className={styles.modalBody}>
                <div className={styles.modalHeader}>
                    Add Comment
                </div>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    name="comment"
                    id="comment"
                    label="Comment"
                    value={commentText}
                    onChange={(event)=>{
                        setCommentText(event.target.value);
                    }}
                />
                </div>
                <Button onClick={()=>{
                    addCommentClicked();
                }} variant="contained" color="primary">Add Comment</Button>
            </div>
        </Modal>
    </>;
};

export default PostCard;