let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let displayString = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let clickedButton = e.target.innerHTML;

        if (clickedButton == '=') {
            if (string === "") {
                input.value = "";
            } else {
                try {
                    string = eval(string);
                    displayString = string;
                    input.value = displayString;
                } catch {
                    input.value = "Error";
                    string = "";
                    displayString = "";
                }
            }
        }

        else if (clickedButton == 'RESET') {
            string = "";
            displayString = "";
            input.value = displayString;
        }

        else if (clickedButton == 'DEL') {
            string = string.toString();  
            displayString = displayString.toString();
            string = string.substring(0, string.length - 1);  
            displayString = displayString.substring(0, displayString.length - 1); 
            input.value = displayString;
        }

        
        else if (['+', '*', '/', '%'].includes(clickedButton) && string === "") {
            
        }

        else if (clickedButton == 'x') {
            string += '*';  
            displayString += 'x';  
            input.value = displayString;
        }

        else if (clickedButton == '.' && string === "") {
            string = "0.";
            displayString = "0.";
            input.value = displayString;
        }

        else {
            string += clickedButton;  
            displayString += clickedButton;  
            input.value = displayString;
        }
    });
});






