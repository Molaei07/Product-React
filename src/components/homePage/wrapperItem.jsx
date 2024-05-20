import { Item } from "./productItems";

export const WrapperItem = ({ list, setList }) => {
    return (
        <div className="content">
            {list.map((item, index) => (
                <Item key={index} name={item.name} price={item.price} />
            ))}
        </div>
    );
}