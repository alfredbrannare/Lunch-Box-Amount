//Declaring variables
food = document.querySelector("#food");
foodTypeLabel = document.querySelector(".foodType-label");
foodType = document.querySelector("#foodType");
foodWarning = document.querySelector("#foodWarning");

amount = document.querySelector("#amount");
foodAmountLabel = document.querySelector(".foodAmount-label");
foodAmount = document.querySelector("#foodAmount");
amountWarning = document.querySelector("#amountWarning");

addBtn = document.querySelector("#addBtn");
reduceInputs = document.querySelector("#reduceInputs");

displayAmount = document.querySelector("#displayAmount");

let foodID = 0;
const foodStorage = [];

//Function
addBtn.addEventListener("click", function(){
    //Clear each warning message
    foodWarning.innerHTML = "";
    amountWarning.innerHTML = "";

    //Bool to assist with warnings
    let hasValue = false;

    //If either is empty it will wont run    
    if (foodType.value === ""){
        foodWarning.innerHTML = "You have to add a food type";
        console.log("Food is empty");
        hasValue = true;
    }

    if (foodAmount.value === ""){
        amountWarning.innerHTML = "You have to add an amount";
        console.log("Amount is empty")
        hasValue = true;
    }

    if (hasValue){
        return;
    }

    //Declaring input values
    const foodInput = foodType.value;
    const amountInput = foodAmount.value;

    //Creating an object for each food item and pushing it into an array
    const foodObject = { id: foodID++, foodName: foodInput, foodGrams: amountInput };
    foodStorage.push(foodObject);
    console.log(foodStorage);

    //Resets the input fields
    foodType.value = "";
    foodAmount.value = "";

    //Creating list and span elements for the DOM
    const listFood = document.createElement("li");
    listFood.classList.add("listFoodClass");

    const listReduce = document.createElement("li");
    listReduce.classList.add("listReduceClass");

    const spanFood = document.createElement("span");
    spanFood.classList.add("spanFoodClass");
    spanFood.innerHTML = foodObject.foodName + " ";

    const spanAmount = document.createElement("span");
    spanAmount.classList.add("spanAmountClass");
    spanAmount.innerHTML = foodObject.foodGrams + "(g)";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delBtn");
    deleteBtn.innerHTML = "X";

    const reduceGramsInput = document.createElement("input");
    reduceGramsInput.classList.add("reduceInput")
    const reduceGramsBtn = document.createElement("button");
    reduceGramsBtn.classList.add("reduceBtn")


    listFood.appendChild(spanFood);
    listFood.appendChild(spanAmount);
    listFood.appendChild(deleteBtn);
    listReduce.appendChild(reduceGramsInput)
    listReduce.appendChild(reduceGramsBtn);

    displayAmount.appendChild(listFood);
    reduceInputs.appendChild(listReduce);

    //Delete button function
    deleteBtn.addEventListener("click", function(){
        const taskIndex = foodStorage.indexOf(foodObject);
        if (taskIndex > -1){
            foodStorage.splice(taskIndex, 1);
            listFood.remove();
        }

    })
});
