//importamos la conexion a la bd
import db from "../database/db"
//importamos sequelize 
import { DataType, DataTypes } from "sequelize";

const BlogModel = db.define('blogs', {
    titulo:{type: DataTypes.STRING},
    contenido:{type: DataTypes.STRING},
    
});

export default BlogModel