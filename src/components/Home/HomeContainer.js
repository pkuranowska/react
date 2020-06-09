import {connect} from 'react-redux';
import Home from './Home.js';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
}); {/* w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem */}

export default connect(mapStateToProps)(Home);
{/* wyrażenie jest odpowiedzialne za połączenie komponentu App z magazynem,
w ostatniej parze nawiasów musimy podać komponent, który jest wykorzystywany w tym kontenerze. */}