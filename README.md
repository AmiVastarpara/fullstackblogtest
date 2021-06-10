# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm i`

install all the packages

### `npm run start`

run the application in your local environment
backend application link https://github.com/typicode/json-server. we have to run this backend on localhost:3000 port
A sample db.json file added in this project.

### Available Routes

###'/'
entry page of App. Displaying all the Author list presented in db.json file. It also provides a form to add new Author throw the "Add New Author" button


###'/author/:id'
It will render Author data along with their posts. And one button to add new Post

###'/posts/:id'
It will render Post data along with its comments. It also provides to facility to add like and comment

###'/addAuthor'
This is form to add New Author in our system which will render from '/' route.

### Folder Structure
-> src <br />

<ul>
<li>component</li>
<li>pages</li>
<li>redux</li>
    <ul>
        <li>action</li>
        <li>reducer</li>
        <li>store</li>
    </ul>
<li>routes</li>
<li>utils</li>
</ul>