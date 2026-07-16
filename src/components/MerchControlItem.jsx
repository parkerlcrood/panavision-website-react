import { Link } from "react-router-dom";
import { useState } from "react";


function MerchControlItem({item, removeItem, refreshMerch}) {

    const [editing, setEditing] = useState(false);
    const [merchName, setMerchName] = useState("");
    const [merchPrice, setMerchPrice] = useState("");
    const [merchDescription, setMerchDescription] = useState("");
    const [merchFunny, setMerchFunny] = useState("");

    const handleEdit = async (item) => {
        try {
            const confirmed = window.confirm(`Are you sure you want to edit this merch item ${item.merch_name}?`);
            const payload = {
                merch_name : merchName === "" ? null : merchName,
                merch_description : merchDescription === "" ? null : merchDescription,
                merch_funny : merchFunny === "" ? null : Number(merchFunny),
                merch_price : merchPrice === "" ? null : Number(merchPrice),
            }
            if (!confirmed) return;
            await fetch(`${import.meta.env.VITE_API_URL}/api/merch/${item.merch_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json",
                    "authorization" : `Bearer ${localStorage.getItem('accessToken')}`,
                },
                body: JSON.stringify(payload)
            });
            refreshMerch();
        } catch (err) {
            console.error("Edit request failed:", err);
        } 
    }

    return (
        <>
            <li className={editing ? "hidden": "merchItemMini"}>
                <div className="miniMerchOtherContainer">
                    <div className="miniMerchName">  
                        <Link to={`/merch/${item.merch_id}`}>
                            <p className = "admin-merch-name">{item.merch_name}</p>
                        </Link>
                    </div> 
                    <div className = "miniMerchPrice">
                        <p>${item.merch_price}</p>
                    </div>
                    <span className = "buttonContainer">
                        <button className = "miniButton" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setEditing(true);
                        }}>
                            Edit Item
                        </button>
                        <button className = "miniButton" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            removeItem(item.merch_id);
                        }}>
                            Delete Item
                        </button>
                    </span>
                </div>  
            </li>
            <li className={editing ? "editMerchItemMini" : "hidden"}>
                <form>
                    <label className="inputLabel" htmlFor="merchName"><p>New Merch Name:</p></label> 
                    <input name="merchName" type="text" value={merchName} onChange={(e) => setMerchName(e.target.value)}></input>
                    <label className="inputLabel" htmlFor="merchPrice"><p>New Price:</p></label> 
                    <input name="merchPrice" type="number" value={merchPrice} onChange={(e) => setMerchPrice(e.target.value)}></input>
                    <label className="inputLabel" htmlFor="merchImage"><p>New Description:</p></label> 
                    <input name="merchDescription" type="textarea" value={merchDescription} onChange={(e) => setMerchDescription(e.target.value)}></input>
                    <label className="inputLabel" htmlFor="merchFunny"><p>New Funny Factor:</p></label> 
                    <input name="merchFunny" type="number" value={merchFunny} onChange={(e) => setMerchFunny(e.target.value)}></input>
                    <span className = "buttonContainer">
                        <button type="submit" className = "miniButton" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleEdit(item);
                            setEditing(false);
                        }}>
                            Confirm Edit
                        </button>
                        <button className = "miniButton" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setEditing(false);
                        }}>
                            Stop Editing Item
                        </button>
                    </span>
                </form>
                    
            </li>
    </>
    );

}

export default MerchControlItem;