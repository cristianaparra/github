import React from 'react';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Routerss from './Routerss'
import Lapizy from './Lapizy'

function App() {
  return (
    <div>
      <Router>
        <Switch>// orden de la ruta//
          //render mtiene una function y html que indica una
          <Route path="/person/detail/:rut" render={() => <h2>segundo example</h2>} exact />//esta es la ruta 
          <Route path="/about" component={Routerss} exact />//esta es la ruta// componente importa un componente que puede ser un html // exact es un atributo que tiene que ser el no,mbre exacto del path
          <Route path="/:rut" component={Lapizy}/>//siempre se tien que paretir con un slash que inica la ruta// parh es la que indica la ruta que tendra sierto componente en la app
          <Route path="*" render={()=> <h2> error</h2>} />/// * esto significa que la pagina no se encuentrra y arroja un error
        </Switch>
      </Router>
    </div>
  );
}

export default App;
