// code Here
function List(props) {
    // function List({ listData, action }) {
    console.log(props);
    const { listData, action } = props
    return (
        <div>
            <h1>{listData}</h1>
            <button>{action}</button>
        </div>
    )
}

export default List