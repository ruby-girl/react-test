import React from 'react'
import{HashRouter,Route,Switch} from 'react-router-dom'
import Page1 from './page/routerPages/page1'
import Page2 from './page/routerPages/page2'

const BasicRoute=()=>(
    <HashRouter>
        <Switch>
            <Route exact path="/Page1" component={Page1}/>
            <Route exact path="/Page2" component={Page2}/>
        </Switch>
    </HashRouter>
)