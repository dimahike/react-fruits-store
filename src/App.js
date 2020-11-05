import { Route, Switch } from 'react-router-dom';

import { Cart } from './components/Cart';
import { DefaultPage } from './components/DefaultPage';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route>
          <DefaultPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
