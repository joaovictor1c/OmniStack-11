import Knex from "knex";
import configKnex from "../../knexfile";

const connection = Knex(configKnex.development);

export default connection;
