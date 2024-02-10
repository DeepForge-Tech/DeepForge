const Pool = require("pg").Pool
const pool = new Pool(
    {
        user: process.env.POSTGRESQL_USER,
        password: process.env.POSTGRESQL_PASSWORD,
        host: process.env.POSTGRESQL_HOST,
        port: process.env.POSTGRESQL_PORT,
        database: process.env.POSTGRESQL_DB,
        ssl: true
    }
)
class DB {
    async InsertToDatabase(DB_NAME, Fields) {
        try
        {
            if (Fields.constructor === Object && Fields.constructor != Array) {
                var SQL_QUERY = "INSERT INTO " + DB_NAME + " ";
                var Columns = "(";
                var Values = "(";

                Object.entries(Fields).forEach(([key, value], i) => {
                    if (i != Fields.length) {
                        Columns = Columns + key;
                        Values = Values + "'" + value + "'";
                        if (i != Object.keys(Fields).length - 1) {
                            Columns += ",";
                            Values += ",";
                        }
                    }
                });
                Columns += ")";
                Values += ")";
                SQL_QUERY = SQL_QUERY + Columns + " VALUES " + Values;
                await pool.query(SQL_QUERY);
                return 200;
            }
            else {
                return 403;
            }
        }
        catch (error)
        {
            console.log(error);
            return 403;
        }
    }

    async GetAllFromDatabase() {
        var SQL_QUERY = await pool.query("SELECT * FROM logs");
        return SQL_QUERY.rows
    }
};
module.exports = new DB()