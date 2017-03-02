import * as _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux'

import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { store } from '../redux';

import './Voyager.css';
import './viewport.css';

import ErrorBar from './utils/ErrorBar';
import LoadingAnimation from './utils/LoadingAnimation';
import DocPanel from './panel/DocPanel';

import { SVGRender } from './../graph/';
import { Viewport } from './../graph/'

export default class Voyager extends React.Component<void, void> {

  componentDidMount() {
    const svgRender = new SVGRender();
    const viewport = new Viewport(this.refs['viewport'] as HTMLElement);
  }

  render() {
    return (
      <Provider store={ store }>
        <MuiThemeProvider>
          <div className="graphql-voyager">
            <DocPanel/>
            <div ref="viewport" className="viewport"></div>
            <ErrorBar/>
            <LoadingAnimation/>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
