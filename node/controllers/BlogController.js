//importamos el modelo 
import BlogModel from "../models/BlogModel.js";

//** METODOS PARA EL CRUD **/

//mostrar todos los registro- getAllBlog toma TODO
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({ message: error.message })

    }
}

//mostrar un registro
export const getBlog = async (req, res) => {
    try {
        const blog = BlogModel.findAll({
            where: { id: req.params.id }

        })
        res.json(blog)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//crear un registro
export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })

    }
}

//actualizar un registro
export const updateBlog = async (req, res) => {
    try {
        BlogModel.update(req.body,{
            where: { id: req.params.id }
        })
        res.json({
            "message": "¡Registro Actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//eliminar un registro
export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: { id: req.param.id }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}