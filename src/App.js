import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Routes from "./Routes";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    appbar: {
        width:'100%',
        height:'10vh',
        backgroundColor:'#122230',
        textAlign:"center",
        color:"white",
        fontSize:"20px",
        fontWeight:"bold",
        paddingTop:"3vh"
    },
}));
function App() {
    const classes = useStyles();
  return<div>
        <div className={classes.appbar}>
            Fullstack Post Blog
        </div>
                  <Switch>
                      {Routes.map((route) => (
                          <Route exact path={route.path} key={route.path}>
                              <route.component />
                          </Route>
                      ))}
                  </Switch>
      </div>;
}

export default App;
