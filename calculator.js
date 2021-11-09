//Annabelle Tran West-MEC Coding Calculator assignment 11-8-21 JS
//Sets answer as a blank before user input
form1.textarea.value = "";
//adds numbers/signs user clicks on
function insert(num)
{
    document.formcalc.answer.value = document.formcalc.answer.value + num;
}
//solves the problem
function solve()
{
    var exp = document.formcalc.answer.value;
if(exp)
    {
        document.formcalc.answer.value = eval(exp)
    }
}

