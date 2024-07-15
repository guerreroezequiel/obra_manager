import UserFieldSetting from '#models/user/user_field_setting';
import { HttpContext } from '@adonisjs/core/http';

export default class UserFieldSettingsController {

    // List all UserFieldSettings
    public async indexById({ response }: HttpContext) {
        const userFieldSettings = await UserFieldSetting
        return response.json(userFieldSettings)
    }

    // List all UserFieldSettings by tableName
    public async index({ params, response }: HttpContext) {
        const userFieldSettings = await UserFieldSetting.query().where('tableName', params.tableName)
        return response.json(userFieldSettings)
    }

    //update user field setting by user id and table name
    public async updateByUserIdAndId({ params, request, response }: HttpContext) {
        const userFieldSetting = await UserFieldSetting.query().where('userId', params.userId).where('id', params.id).first()
        if (!userFieldSetting) {
            return response.status(404).json({ error: 'UserFieldSetting not found' })
        }
        const data = request.only(['userId', 'id', 'fieldName', 'tag', 'width', 'order', 'isEditable', 'isHidden'])
        userFieldSetting.merge(data)
        await userFieldSetting.save()
        return response.json(userFieldSetting)
    }

    // Create a new UserFieldSetting
    public async create({ request, response }: HttpContext) {
        const data = request.only(['userId', 'tableName', 'fieldName', 'tag', 'width', 'order', 'isEditable', 'isHidden'])
        const userFieldSetting = await UserFieldSetting.create(data)
        return response.json(userFieldSetting)
    }

    // Show UserFieldSetting by id
    public async show({ params, response }: HttpContext) {
        const userFieldSetting = await UserFieldSetting.find(params.id)
        if (!userFieldSetting) {
            return response.status(404).json({ error: 'UserFieldSetting not found' })
        }
        return response.json(userFieldSetting)
    }

    // Update UserFieldSetting data
    public async update({ params, request, response }: HttpContext) {
        const userFieldSetting = await UserFieldSetting.find(params.id)
        if (!userFieldSetting) {
            return response.status(404).json({ error: 'UserFieldSetting not found' })
        }
        const data = request.only(['userId', 'tableName', 'fieldName', 'tag', 'width', 'order', 'isEditable', 'isHidden'])
        userFieldSetting.merge(data)
        await userFieldSetting.save()
        return response.json(userFieldSetting)
    }
}