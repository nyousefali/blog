import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from './pages/Main';
import Article from './pages/Article';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/articles/:id" component={Article}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;