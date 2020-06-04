import {connect} from 'react-redux';
import Column from './Column';

//export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  //columns: getColumnsForList(state, props.id),
  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);