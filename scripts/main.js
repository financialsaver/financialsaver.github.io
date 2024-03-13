/* Defining Functions */

function add_checking_bill() {
    var table_str = document.getElementById("c-table").innerHTML;
    const table_row_str = table_str.split("</tr>");

    var tot_bills = 0;
    var output_html = "";
    for (let i = 0; i < table_row_str.length; i++) {
        if (table_row_str[i].includes("c-bil-add")) {
            output_html += "\n<tr>\n";
            output_html += "\t<td><h4>Bill Amount</h4></td>\n";
            output_html += "\t<td><input type=\"text\" class=\"c-input\" id=\"c-bil-" + tot_bills.toString() + "\"></td>\n";
            output_html += "</tr>";
        }
        else if (table_row_str[i].includes("c-bil")) {
            tot_bills += 1;
        }
        
        output_html += table_row_str[i]
        if (i < table_row_str.length - 1) {
            output_html += "</tr>";
        }
    }
    
    console.log(output_html);
    document.getElementById("c-table").innerHTML = output_html;
    
    document.getElementById("c-bil-add").onclick = add_checking_bill;
    var c_input_elems = document.getElementsByClassName("c-input");
    for (let i = 0; i < c_input_elems.length; i++) {
        c_input_elems[i].addEventListener("change", update_savings_transfer);
    }
}

function update_savings_transfer() {
    var tot_bal = document.getElementById("c-bal").innerHTML;
    var tot_bal = parseFloat(tot_bal);
    if (isNaN(tot_bal)) {
        tot_bal = 0
    }

    document.getElementById("c-tran").innerHTML = tot_bal.toString()
}

/* Setting Event to Function References */

document.getElementById("c-bil-add").onclick = add_checking_bill;

var c_input_elems = document.getElementsByClassName("c-input");
for (let i = 0; i < c_input_elems.length; i++) {
    c_input_elems[i].addEventListener("change", update_savings_transfer);
}