import { createStore as _createStore, compose } from "redux";
import reducers from "./modules";
import middlewares from "./middlewares";

const createStore = () =>
  _createStore(
    reducers,
    compose(
      middlewares,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

export default createStore;
