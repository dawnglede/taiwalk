import '../scss/index.scss'
import Router from './router'

if (module.hot) {
  module.hot.accept();
}

ReactDom.render(
  <Router />,
  document.getElementById('root')
);