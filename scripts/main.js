/* Defining Sub Functions */

function reset_table(type, html) {
    /* Saving Input Values */
    var input_elems = document.getElementsByClassName(type + "-input");
    var input_ids = [];
    var input_vals = [];
    for (let i = 0; i < input_elems.length; i++) {
        input_ids.push(input_elems[i].id);
        input_vals.push(input_elems[i].value);
    }

    /* Reseting HTML Table */
    document.getElementById(type + "-table").innerHTML = html;

    /* Restoring Input Values */
    for (let i = 0; i < input_ids.length; i++) {
        document.getElementById(input_ids[i]).value = input_vals[i];
    }

    /* Restoring Event Listeners */
    var input_elems = document.getElementsByClassName(type + "-input");

    if (type == "c") {
        for (let i = 0; i < input_elems.length; i++) {
            input_elems[i].addEventListener("change", update_checking);
        }

        document.getElementById("c-bil-add").onclick = add_bill;
    }
    else if (type == "s") {
        for (let i = 0; i < input_elems.length; i++) {
            input_elems[i].addEventListener("change", update_savings);
        }

        document.getElementById("s-bkt-add").onclick = add_bucket;
        document.getElementById("s-lon-add").onclick = add_loan;
        document.getElementById("s-inv-add").onclick = add_investment;
    }
}

/* Defining Event Functions */

function add_bill() {
    var table_str = document.getElementById("c-table").innerHTML;
    const table_row_str = table_str.split("</tr>");

    /* Creating the Output HTML */
    var tot_bills = 0;
    var output_html = "";
    for (let i = 0; i < table_row_str.length; i++) {
        if (table_row_str[i].includes("c-bil-add")) {
            output_html += "\n<tr>\n";
            output_html += "\t<td><h4>Bill #" + (tot_bills+1).toString() + "</h4></td>\n";
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

    reset_table("c", output_html);
}

function add_bucket() {
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
            output_html += "\t<td><input type=\"text\" class=\"s-input\" id=\"s-bkt-tran-" + tot_bkts.toString() + "\"></td>\n";
            output_html += "\t<td><input type=\"checkbox\" class=\"s-input\" id=\"s-bkt-lock-" + tot_bkts.toString() + "\"></td>\n";
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

    reset_table("s", output_html);
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
            output_html += "\t<td></td>\n";
            output_html += "\t<td><input type=\"text\" class=\"s-input\" id=\"s-lon-tran-" + tot_loans.toString() + "\"></td>\n";
            output_html += "\t<td><input type=\"checkbox\" class=\"s-input\" id=\"s-lon-lock-" + tot_loans.toString() + "\"></td>\n";
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

    reset_table("s", output_html);
}

function add_investment() {
    var table_str = document.getElementById("s-table").innerHTML;
    const table_row_str = table_str.split("</tr>");

    /* Creating the Output HTML */
    var tot_invs = 0;
    var output_html = "";
    for (let i = 0; i < table_row_str.length; i++) {
        if (table_row_str[i].includes("s-inv-add")) {
            output_html += "\n<tr>\n";
            output_html += "\t<td><h4>Investment #" + (tot_invs+1).toString() + "</h4></td>\n";
            output_html += "\t<td><input type=\"text\" class=\"s-input\" id=\"s-inv-bal-" + tot_invs.toString() + "\"></td>\n";
            output_html += "\t<td><input type=\"text\" class=\"s-input\" id=\"s-inv-rat-" + tot_invs.toString() + "\"></td>\n";
            output_html += "\t<td><input type=\"text\" class=\"s-input\" id=\"s-inv-lim-" + tot_invs.toString() + "\"></td>\n";
            output_html += "\t<td><input type=\"text\" class=\"s-input\" id=\"s-inv-tran-" + tot_invs.toString() + "\"></td>\n";
            output_html += "\t<td><input type=\"checkbox\" class=\"s-input\" id=\"s-inv-lock-" + tot_invs.toString() + "\"></td>\n";
            output_html += "</tr>";
        }
        else if (table_row_str[i].includes("s-inv")) {
            tot_invs += 1;
        }
        
        output_html += table_row_str[i];
        if (i < table_row_str.length - 1) {
            output_html += "</tr>";
        }
    }

    reset_table("s", output_html);
}

function update_checking() {
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

function update_savings() {
    var c_tran = parseFloat(document.getElementById("c-tran").innerHTML);
    var s_bal = parseFloat(document.getElementById("s-bal").value);
    var s_info = {
        'bkt': [],
        'lon': [],
        'inv': []
    };

    var s_input_elems = document.getElementsByClassName("s-input");
    for (let i = 0; i < s_input_elems.length; i++) {
        var type = s_input_elems[i].id.split('-')[1];
        var val = s_input_elems[i].id.split('-')[2];
        var pos = parseInt(s_input_elems[i].id.split('-')[3]);

        if (type == "bal") {continue;}

        for (let j = 0; j < (pos + 1 - s_info[type].length); j++) {
            s_info[type].push({
                'bal': NaN,
                'rat': NaN,
                'lim': NaN,
                'tran': NaN,
                'lock': false
            });
        }

        if (val == "lock") {
            s_info[type][pos][val] = s_input_elems[i].checked;
        }
        else {
            s_info[type][pos][val] = parseFloat(s_input_elems[i].value);
        }
    }

    for (let i = 0; i < s_input_elems.length; i++) {
        var type = s_input_elems[i].id.split('-')[1];
        var val = s_input_elems[i].id.split('-')[2];
        var pos = parseInt(s_input_elems[i].id.split('-')[3]);

        if (val == "tran" && !s_info[type][pos]["lock"]) {
            s_info[type][pos][val] = NaN;
        }
    }

    if (isNaN(c_tran) || isNaN(s_bal)) {
        return;
    }
    for (var type in s_info) {
        for (let i = 0; i < s_info[type].length; i++) {
            for (var val in s_info[type][i]) {
                if ((type == "lon" || type == "inv") && val == "lim") {
                    continue;
                }
                else if (val != "tran" && isNaN(s_info[type][i][val])) {
                    return;
                }
            }
        }
    }

    var tot_bkt_bal = 0;
    for (let i = 0; i < s_info['bkt'].length; i++) {
        tot_bkt_bal += s_info['bkt'][i]['bal'];
    }
    var tot_funds = c_tran + (s_bal - tot_bkt_bal);

    for (var type in s_info) {
        for (let i = 0; i < s_info[type].length; i++) {
            if (!isNaN(s_info[type][i]["tran"])) {
                tot_funds -= s_info[type][i]["tran"];
            }
        }
    }

    for (var type in s_info) {
        for (let i = 0; i < s_info[type].length; i++) {
            if (!isNaN(s_info[type][i]["tran"])) {
                continue;
            }

            var tot_rat = 0;
            for (var t in s_info) {
                for (let j = 0; j < s_info[t].length; j++) {
                    if (isNaN(s_info[t][j]["tran"])) {
                        tot_rat += s_info[t][j]["rat"];
                    }
                }
            }

            var new_tran = 0;
            if (!isNaN(s_info[type][i]["lim"])) {
                new_tran = Math.min((s_info[type][i]["lim"] - s_info[type][i]["bal"]), ((s_info[type][i]["rat"] / tot_rat) * tot_funds));

                if (new_tran != (s_info[type][i]["lim"] - s_info[type][i]["bal"])) {
                    continue;
                }
            }
            else if (type == "lon") {
                new_tran = Math.min(s_info[type][i]["bal"], ((s_info[type][i]["rat"] / tot_rat) * tot_funds));

                if (new_tran != s_info[type][i]["bal"]) {
                    continue;
                }
            }
            else {
                continue;
            }
            new_tran = new_tran.toFixed(2);
            document.getElementById("s-" + type + "-tran-" + i.toString()).value = new_tran;
            s_info[type][i]["tran"] = new_tran;
            tot_funds -= new_tran;
        }
    }

    for (var type in s_info) {
        for (let i = 0; i < s_info[type].length; i++) {
            if (!isNaN(s_info[type][i]["tran"])) {
                continue;
            }

            var tot_rat = 0;
            for (var t in s_info) {
                for (let j = 0; j < s_info[t].length; j++) {
                    if (isNaN(s_info[t][j]["tran"])) {
                        tot_rat += s_info[t][j]["rat"];
                    }
                }
            }

            var new_tran = (s_info[type][i]["rat"] / tot_rat) * tot_funds;
            new_tran = new_tran.toFixed(2);
            document.getElementById("s-" + type + "-tran-" + i.toString()).value = new_tran;
            s_info[type][i]["tran"] = new_tran;
            tot_funds -= new_tran;
        }
    }
}

/* Setting Original Event Listeners */

document.getElementById("c-bil-add").onclick = add_bill;

var c_input_elems = document.getElementsByClassName("c-input");
for (let i = 0; i < c_input_elems.length; i++) {
    c_input_elems[i].addEventListener("change", update_checking);
}

document.getElementById("c-tran").addEventListener("change", update_savings);

document.getElementById("s-bkt-add").onclick = add_bucket;
document.getElementById("s-lon-add").onclick = add_loan;
document.getElementById("s-inv-add").onclick = add_investment;

var s_input_elems = document.getElementsByClassName("s-input");
for (let i = 0; i < s_input_elems.length; i++) {
    s_input_elems[i].addEventListener("change", update_savings);
}