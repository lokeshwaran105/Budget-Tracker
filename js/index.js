function add(){
    let table = document.getElementsByTagName('table')[0];
    let type = document.getElementById('type').value;
    let name = document.getElementById('name').value;
    let amt = document.getElementById('amt').value;

    let row = document.createElement('tr');
    let type_row = document.createElement('td');
    type_row.innerHTML = type
    let name_row = document.createElement('td');
    name_row.innerHTML = name
    let amt_row = document.createElement('td');
    amt_row.innerHTML = amt
    let action = document.createElement('td');
    action.innerHTML = "Delete"

    row.append(type_row);
    row.append(name_row);
    row.append(amt_row);
    row.append(action);

    table.append(row);
    
}