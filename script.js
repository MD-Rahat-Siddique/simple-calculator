document.getElementById('buttons-container').addEventListener('click', function(event){
    const clickedDigit = event.target.innerText;
    let output = document.getElementById('output');
    if(isNaN(clickedDigit)){
        if(clickedDigit === 'C'){
            output.value = '';
        }
        else if(clickedDigit === 'DEL'){
            output.value = (output.value).slice(0, -1);
        }
        else if(clickedDigit === '÷'){
            output.value = output.value + '÷';
        }
        else if(clickedDigit === '×'){
            output.value = output.value + '×';
        }
        else if(clickedDigit === '-'){
            output.value = output.value + '-';
        }
        else if(clickedDigit === '+'){
            output.value = output.value + '+';
        }
        else if(clickedDigit === '.'){
            output.value = output.value + '.';
        }
        else if(clickedDigit === '='){
            if(output.value === ''){
                output.value = '';
            }
            else{
                output.value = eval(output.value);
            }
        }
    }
    else{
        output.value = output.value + clickedDigit;
    }
})