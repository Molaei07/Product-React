import Item from "./productItems";
import "./items.css";
import { useEffect, useState } from "react";

const WrapperItem = ({ list, setList }) => {
    const [searchedProducts, setSearchedProducts] = useState();

    useEffect(() => {
        setSearchedProducts(list)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list])
    
    /* filtered data for search */
    const searchInProducts = (event) => {
        let searchValue = event.target.value
        let filteredProducts = list.filter(el => el.name.indexOf(searchValue) !== -1);
        setSearchedProducts(filteredProducts)
    }

    return (
        <div className="content">
            <div className="header">
                {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                <h1 className="title">All Products</h1>
                <input onKeyUp={(event) => { searchInProducts(event) }} className="searchBox" type="text" name="search" id="search" placeholder="Search..." />
            </div>
            {searchedProducts ?
                searchedProducts.map((item, index) => (
                    <Item
                        key={index}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        list={list}
                        setList={setList}
                    />
                )) : null}
        </div>
    );
}

export default WrapperItem;