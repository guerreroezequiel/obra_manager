import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'


export default class UsersController {

    // List all users
    async index({ response }: HttpContext) {
        // Retrieve all users
        const users = await User.all()

        return response.status(200).json(users)
    }

    // Show user by id
    async show({ params, response }: HttpContext) {
        const { id } = params

        // Find user by id
        const user = await User.find(id)

        if (!user) {
            return response.status(404).json({ message: 'User not found' })
        }

        return response.status(200).json(user)
    }

    // Create a new user
    async create({ request, response }: HttpContext) {
        const userData = request.only(['username', 'email', 'password'])
        console.log(userData)
        // Create a new user
        const user = await User.create(userData)

        return response.status(201).json(user)
    }

    // Update user data
    async update({ params, request, response }: HttpContext) {
        const { id } = params
        const userData = request.only(['name', 'email', 'password'])

        // Find user by id
        const user = await User.find(id)

        if (!user) {
            return response.status(404).json({ message: 'User not found' })
        }

        // Update user data
        user.merge(userData)
        await user.save()

        return response.status(200).json(user)
    }

    // Delete user
    async delete({ params, response }: HttpContext) {
        const { id } = params

        // Find user by id
        const user = await User.find(id)

        if (!user) {
            return response.status(404).json({ message: 'User not found' })
        }

        // Delete user
        await user.delete()

        return response.status(204).json(null)
    }

    //Obtener modelo de usuarios
    async getUsersModel({ response }: HttpContext) {
        try {
            const usersModelSchema = await db.rawQuery('DESCRIBE users');
            const filteredSchema = usersModelSchema[0]
                .filter((field: any) => field.Field !== 'created_at' && field.Field !== 'updated_at')
                .map((field: any) => ({
                    Field: field.Field,
                    Type: field.Type,
                    Null: field.Null,
                    Key: field.Key,
                    Default: field.Default,
                }));
            return response.json({ usersModelSchema: filteredSchema });
        } catch (error) {
            return response.status(500).json({ message: 'Internal server error' })
        }
    }
}
