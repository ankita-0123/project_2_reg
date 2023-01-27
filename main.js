function saveToCrudCrud(event){

    event.preventDefault();

    const name = event.target.name.value;

    const price = event.target.price.value;

    
    // localStorage.setItem('price',price);
    // localStorage.setItem('productname',productname);
    // localStorage.setItem('category',category);

    const obj = {

        name,

        price,

    }
    axios.post("https://crudcrud.com/api/43f97970ce2242939760bce6d911e0ba/sellerDetails",obj)
    .then((response)=> {
        showNewUserScreen(response.data)
        console.log(response);
    })
    .catch((error)=> {
        console.log(error);
    })

    // localStorage.setItem(obj.product,JSON.stringify(obj));
    // showNewUserScreen(obj)   
}


function showNewUserScreen(obj){
    document.getElementById("name").value=" ";
    document.getElementById("price").value=" ";

    const parentElem = document.getElementById('ListOfCategory');

    const childElem = document.createElement('li');

    childElem.textContent =  obj.name + ' - ' + obj.price + '-';

    const deleteButton = document.createElement('input');

    deleteButton.type = "button";

    deleteButton.value = 'Delete Product';
    //get//
    axios.get("https://crudcrud.com/api/43f97970ce2242939760bce6d911e0ba/sellerDetails")
    .then((response)=> {
        for(i=0;i<response.data.length;i++){
            showNewUserScreen(response.data[i])
        }
    })
    .catch((error)=> {

    })
    axios.delete("https://crudcrud.com/api/43f97970ce2242939760bce6d911e0ba/sellerDetails")
    .then((response)=> {
        console.log(response);
    })
    .catch((error)=> {
        console.log(error);
    })

    deleteButton.onclick = () => {
        localStorage.removeItem(obj.price);

        parentElem.removeChild(childElem);
    }

    childElem.appendChild(deleteButton);

    parentElem.appendChild(childElem);
    }