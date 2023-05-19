const tableof2 = (x1) => {

    let y;
    for(y=1; y<11; y++){
        var tableoftwo = x1 * y;        
        console.log( x1 + ' * ' + y + ' = ' + tableoftwo);
    }
    return tableoftwo;
}

export default tableof2;