import './Item.css';
function ItemDate(props){
    const date = props.date instanceof Date ? props.date : new Date();
    const month = date.toLocaleString('en-US', {month: 'long'});
    const day = date.toLocaleString('en-US', {day: '2-digit'});
    const year = date.getFullYear();

    return (
        <header className="item-date-card">
            <h1>Item Date</h1>
            <p>{month}</p>
            <p>{day}</p>
            <p>{year}</p>
        </header>
    )
}
export default ItemDate;