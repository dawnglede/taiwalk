import '../scss/index.scss'
import Router from './router/index.js'

if (module.hot) {
  module.hot.accept();
}

ReactDom.render(
  <Router />,
  document.getElementById('root')
);