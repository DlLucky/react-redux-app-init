import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Aside from './components/Aside';
import './style.scss';

const Home = lazy(() => import('./Home')); // 登录后主页
const PageOne = lazy(() => import('./PageOne')); // 第一页
const PageTwo = lazy(() => import('./PageTwo')); // 第二页
const PageThree = lazy(() => import('./PageThree')); // 第三页

export default function Index({ history, location }) {
  return (
    <div id="indexArea">
      <Aside history={history} location={location} />
      <div id="routeContent">
        <Route exact path="/" component={Home} />
        <Route path="/pageone" component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
        <Route path="/pagethree" component={PageThree} />
      </div>
    </div>
  );
}

Index.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
};
