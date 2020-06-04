import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
}); {/* w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem */}

export default connect(mapStateToProps)(App);
{/* wyrażenie jest odpowiedzialne za połączenie komponentu App z magazynem,
w ostatniej parze nawiasów musimy podać komponent, który jest wykorzystywany w tym kontenerze. */}