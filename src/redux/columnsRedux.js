import shortid from 'shortid';

// selectors
export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

// action name creator
const reducerName = 'columns';
const createActionName = name => `app/${reducerName}/${name}`; //ta fukcja bedzie potrzebna w każdym pliku z reduksowymi akcjami i reducerem.
// Na przykład, jeśli wykorzystamy tę funkcję z argumentem 'TEST', w rezultacie otrzymamy ciąg znaków 'app/columns/TEST'
// ('app/' + reducerName + '/' + name) literał szablonowy, tekst zawierający zmienne, krótszy zapis przy użyciu backticka `, w tekście zawartym w backtickach możemy używać zmiennych 
//(lub innych wyrażeń JS), zamykając je w nawiasach klamrowych poprzedzonych znakiem dolara ${ }. `app/${reducerName}/${name}`

// action types
export const ADD_COLUMN = createActionName('ADD_COLUMN'); //stala, w ktorej zapisujemy nazwe akcji

// action creators
export const createActionAddColumn = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_COLUMN });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}

//Będziemy korzystać z tej struktury pliku przy każdym komponencie posiadającym jakiekolwiek akcje