import Branch from "./Branch";

const Tree = (props) => <ul>{props.data.map(item => <Branch data={item} key={item.id} />)}</ul>;

export default Tree;