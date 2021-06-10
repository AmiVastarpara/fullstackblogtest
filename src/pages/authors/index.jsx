import React, {useEffect, useState} from "react";
import {fetchAuthors} from "../../redux/actions/author";
import AuthorList from './authorList';
import {Button, Divider} from "@material-ui/core";

 const Authors = (props)=>{
     const [ authorList, setAuthorList ] = useState([]);
     useEffect(()=>{
         fetchAuthors({}).then((result)=>{
             setAuthorList([...result]);
         }).catch((e)=>{
             console.log(e);
         });
     },[]);
    return <>
        <div >
            <Button variant="contained" color="primary" href="/addAuthor">Add New Author</Button>
            <Divider/>
            <div style={{textAlign: "center"}}>All Authors</div>

            <AuthorList authorList={authorList}/>

        </div>
    </>;
}

export default Authors;
