const Form=()=>{
    return(
        <div>
            <form>
                <label>Product Id</label>
                <input type="number"/>
                <label>Selling Price</label>
                <input type="number"/>
                <label>Product Name</label>
                <input type="text"/>
                <label>Choose a Category</label>
                <select>
                    <option>Food</option>
                    <option>Skincare</option>
                    <option>Electronic</option>
                </select>
                <button>Add Product</button>
            </form>
        </div>
    )
}


export default Form;