import { Item } from "./productItems";

export const WrapperItem = ({ list, setList }) => {
    return (
        <div className="content">
            {list.map((item) => (
                <Item
                    key={item.id}
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