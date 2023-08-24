import React ,{useState} from 'react'
import ChildUseState from './ChildUseState';

const ParentUseState = () => {
    const [mobile, setMobiles] = useState(
        [
            {
                name: "Samsung Galaxy ",
                ram: "8GB",
                price: 30999
            }, {
                name: "Apple iP 14 Pro max",
                ram: "128GB",
                price: 127999
            }, {
                name: "Redmi Note 12",
                ram: "6GB",
                price: 18999
            }, {
                name: "Vivo Y35",
                ram: "8GB",
                price: 16999
            },
            {
                name: "Vivo U20",
                ram: "4GB",
                price: 15000
            }
        ]
    );

    let passvalue = (index) => {
        let datas = mobile.filter((n, i) => i !== index);
        setMobiles(datas);
        console.log(datas)
    };

    return (
        <div>
            <div>ParentUseState</div>
            <ChildUseState message={mobile} func={passvalue} />
        </div>
    )
}

export default ParentUseState