import React from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import Home from './page/routerPages/home'
import three from './page/routerPages/three'
import Page2 from './page/routerPages/page2'


const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/three/:num" component={three} />
            <Route exact path="/Page2" component={Page2} />
        </Switch>
    </BrowserRouter>
)
export default BasicRoute