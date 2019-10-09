import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return { articles: state.articles, name: state.name };
};

const ConnectedList = ({ articles, name }) => (
  <div>
    <strong>{name}</strong>
    <ul className="list-group list-group-flush">
      {articles.map(el => (
        <li className="list-group-item" key={el.id}>
          {el.title}
        </li>
      ))}
    </ul>
  </div>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;