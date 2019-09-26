import React from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import Home from './page/routerPages/home'
import Page1 from './page/routerPages/page1'
import Page2 from './page/routerPages/page2'


const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Page1/:num" component={Page1} />
            <Route exact path="/Page2" component={Page2} />
        </Switch>
    </BrowserRouter>
)
export default BasicRoute