app.get('/users',(req,res) =>
{
    mysqlConnection.query('SELECT * FROM users', (err, rows, fields) =>{
        if(!err)
        console.log(rows);
        else
        console.log(err)
    })
});