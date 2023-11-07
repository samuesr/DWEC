document.addEventListener('DOMContentLoaded',main,false);
function main (){
    var pluginsLength= navigator.plugins.length;
    document.body.innerHTML=pluginsLength+"Plugin(s)<br>"+
    '<table id="pluginTable"><thead>'
    +'<tr><th>Name</th><th>FIlename</th><th>description</th><th>version</th></tr>'
    +'</thead><tbody></tbody></table>';
    var table= document.getElementById('pluginTable');
    for (let i = 0; i < pluginsLength; i++) {
        let newRow= table.insertRow();
        newRow.insertCell().textContent=navigator.plugins[i].name;
        newRow.insertCell().textContent=navigator.plugins[i].filename;
        newRow.insertCell().textContent=navigator.plugins[i].description;
        newRow.insertCell().textContent=navigator.plugins[i].version?navigator.plugins[i].version:" ";  
    }
}