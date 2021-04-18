const formatDate = function(date){
    var newDate = new Date(date);
    const formatDate = `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}
                        ${newDate.getHours()}:${newDate.getMinutes()}`;
    
    return formatDate;
}

module.exports = {formatDate};