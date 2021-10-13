import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import BlogList from '../pages/BlogList';
import CreateBlogItem from '../pages/CreateBlogItem';
import Search from '../pages/Search';

const Link = () => {

    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/bloglist" component={BlogList}></Route>
            <Route exact path="/createblogitem" component={CreateBlogItem}></Route>
            <Route exact path="/search" component={Search}></Route>
        </Switch>
    )
}

export default Link;