
function add_checking_bill() {
    var table_str = document.getElementById("c-table").innerHTML;
    const table_row_str = table_str.split("</tr>");

    var tot_bills = 0;
    var output_html = "";
    for (let i = 0; i < table_row_str.length; i++) {
        if (table_row_str[i].includes("c-bil-new")) {
            tot_bills += 1;
        }
        if (table_row_str[i].includes("c-bil-add")) {
            output_html += "\n<tr>\n";
            output_html += "\t<td><h4>Bill Amount</h4></td>\n";
            output_html += "\t<td><input type=\"text\" id=\"c-bil-" + tot_bills.toString() + "\"></td>\n";
            output_html += "</tr>";
        }
        
        output_html += table_row_str[i]
        if (i < table_row_str.length - 1) {
            output_html += "</tr>";
        }
    }
    
    console.log(output_html);
    document.getElementById("c-table").innerHTML = output_html;
    document.getElementById("c-bil-add").onclick = add_checking_bill;
}

document.getElementById("c-bil-add").onclick = add_checking_bill;