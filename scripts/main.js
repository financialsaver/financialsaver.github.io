/* Defining Functions */

function add_checking_bill() {
    var table_str = document.getElementById("c-table").innerHTML;
    const table_row_str = table_str.split("</tr>");

    /* Creating the Output HTML */
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
        
        output_html += table_row_str[i];
        if (i < table_row_str.length - 1) {
            output_html += "</tr>";
        }
    }

    /* Saving Input Values */
    var c_input_elems = document.getElementsByClassName("c-input");
    var c_input_ids = [];
    var c_input_vals = [];
    for (let i = 0; i < c_input_elems.length; i++) {
        c_input_ids.push(c_input_elems[i].id);
        c_input_vals.push(c_input_elems[i].value);
    }
    
    /* Reseting to New HTML */
    document.getElementById("c-table").innerHTML = output_html;

    /* Restoring Original Input Values */
    for (let i = 0; i < c_input_ids.length; i++) {
        document.getElementById(c_input_ids[i]).value = c_input_vals[i];
    }
    
    /* Restoring Event Listeners */
    document.getElementById("c-bil-add").onclick = add_checking_bill;
    
    var c_input_elems = document.getElementsByClassName("c-input");
    for (let i = 0; i < c_input_elems.length; i++) {
        c_input_elems[i].addEventListener("change", update_savings_transfer);
    }
}

function update_savings_transfer() {
    var c_input_elems = document.getElementsByClassName("c-input");

    var sav_tran = 0;
    for (let i = 0; i < c_input_elems.length; i++) {
        var new_amt = parseFloat(c_input_elems[i].value);
        if (isNaN(new_amt)) {
            new_amt = 0;
        }
        
        if (c_input_elems[i].id == "c-bal") {
            sav_tran += new_amt;
        }
        else {
            sav_tran -= new_amt;
        }
    }

    if (sav_tran < 0) {
        sav_tran = 0;
    }

    document.getElementById("c-tran").innerHTML = sav_tran.toFixed(2).toString();
}

function add_savings_bucket() {
    var table_str = document.getElementById("s-table").innerHTML;
    const table_row_str = table_str.split("</tr>");

    /* Creating the Output HTML */
    var tot_bkts = 0;
    var output_html = "";
    for (let i = 0; i < table_row_str.length; i++) {
        if (table_row_str[i].includes("s-bkt-add")) {
            output_html += "\n<tr>\n";
            output_html += "\t<td><h4>Bucket #" + (tot_bkts+1).toString() + "</h4></td>\n";
            output_html += "\t<td><input type=\"text\" class=\"s-input\" id=\"s-bkt-bal-" + tot_bkts.toString() + "\"></td>\n";
            output_html += "\t<td><input type=\"text\" class=\"s-input\" id=\"s-bkt-rat-" + tot_bkts.toString() + "\"></td>\n";
            output_html += "\t<td><input type=\"text\" class=\"s-input\" id=\"s-bkt-lim-" + tot_bkts.toString() + "\"></td>\n";
            output_html += "\t<td><p id=\"s-bkt-rec-" + tot_bkts.toString() + "\">0</p></td>\n";
            output_html += "\t<td><input type=\"text\" class=\"s-input\" id=\"s-bkt-act-" + tot_bkts.toString() + "\"></td>\n";
            output_html += "</tr>";
        }
        else if (table_row_str[i].includes("s-bkt")) {
            tot_bkts += 1;
        }
        
        output_html += table_row_str[i];
        if (i < table_row_str.length - 1) {
            output_html += "</tr>";
        }
    }

    /* Saving Input Values */
    var s_input_elems = document.getElementsByClassName("s-input");
    var s_input_ids = [];
    var s_input_vals = [];
    for (let i = 0; i < s_input_elems.length; i++) {
        s_input_ids.push(s_input_elems[i].id);
        s_input_vals.push(s_input_elems[i].value);
    }
    
    /* Reseting to New HTML */
    document.getElementById("s-table").innerHTML = output_html;

    /* Restoring Original Input Values */
    for (let i = 0; i < s_input_ids.length; i++) {
        document.getElementById(s_input_ids[i]).value = s_input_vals[i];
    }
    
    /* Restoring Event Listeners */
    document.getElementById("s-bkt-add").onclick = add_savings_bucket;
    
    /*
    var s_input_elems = document.getElementsByClassName("s-input");
    for (let i = 0; i < s_input_elems.length; i++) {
        s_input_elems[i].addEventListener("change", update_savings_transfer);
    }
    */
}

function add_loan() {
    var table_str = document.getElementById("s-table").innerHTML;
    const table_row_str = table_str.split("</tr>");

    /* Creating the Output HTML */
    var tot_loans = 0;
    var output_html = "";
    for (let i = 0; i < table_row_str.length; i++) {
        if (table_row_str[i].includes("s-lon-add")) {
            output_html += "\n<tr>\n";
            output_html += "\t<td><h4>Loan #" + (tot_loans+1).toString() + "</h4></td>\n";
            output_html += "\t<td><input type=\"text\" class=\"s-input\" id=\"s-lon-bal-" + tot_loans.toString() + "\"></td>\n";
            output_html += "\t<td><input type=\"text\" class=\"s-input\" id=\"s-lon-rat-" + tot_loans.toString() + "\"></td>\n";
            output_html += "\t<td><input type=\"text\" class=\"s-input\" id=\"s-lon-lim-" + tot_loans.toString() + "\"></td>\n";
            output_html += "\t<td><p id=\"s-lon-rec-" + tot_loans.toString() + "\">0</p></td>\n";
            output_html += "\t<td><input type=\"text\" class=\"s-input\" id=\"s-lon-act-" + tot_loans.toString() + "\"></td>\n";
            output_html += "</tr>";
        }
        else if (table_row_str[i].includes("s-lon")) {
            tot_loans += 1;
        }
        
        output_html += table_row_str[i];
        if (i < table_row_str.length - 1) {
            output_html += "</tr>";
        }
    }

    /* Saving Input Values */
    var s_input_elems = document.getElementsByClassName("s-input");
    var s_input_ids = [];
    var s_input_vals = [];
    for (let i = 0; i < s_input_elems.length; i++) {
        s_input_ids.push(s_input_elems[i].id);
        s_input_vals.push(s_input_elems[i].value);
    }
    
    /* Reseting to New HTML */
    document.getElementById("s-table").innerHTML = output_html;

    /* Restoring Original Input Values */
    for (let i = 0; i < s_input_ids.length; i++) {
        document.getElementById(s_input_ids[i]).value = s_input_vals[i];
    }
    
    /* Restoring Event Listeners */
    document.getElementById("s-lon-add").onclick = add_loan;
    
    /*
    var s_input_elems = document.getElementsByClassName("s-input");
    for (let i = 0; i < s_input_elems.length; i++) {
        s_input_elems[i].addEventListener("change", update_savings_transfer);
    }
    */
}

/* Setting Original Event Listeners */

document.getElementById("c-bil-add").onclick = add_checking_bill;

var c_input_elems = document.getElementsByClassName("c-input");
for (let i = 0; i < c_input_elems.length; i++) {
    c_input_elems[i].addEventListener("change", update_savings_transfer);
}

document.getElementById("s-bkt-add").onclick = add_savings_bucket;

document.getElementById("s-lon-add").onclick = add_loan;