import {connect} from 'react-redux';
import List from './List';
import { getColumnsForList } from '../../redux/columnsRedux.js';
import { createActionAddColumn } from '../../redux/columnsRedux.js';

// zwraca tablicę, zawierającą wyłącznie kolumny o listId pasującym do wyświetlanej listy:
//export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);