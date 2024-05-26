import Item from "./productItems";
import "./items.css";

const WrapperItem = ({ list, setList }) => {
    return (
        <div className="content">
            <div className="header">
                {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                <h1 className="title">All Products</h1>
                <input className="searchBox" type="text" name="search" id="search" placeholder="Search..." />
            </div>
            {list.map((item,index) => (
                <Item
                    key={index}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    list={list}
                    setList={setList}
                />
            ))}
        </div>
    );
}

export default WrapperItem;