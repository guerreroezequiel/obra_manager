
import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'


export default class SessionController {
  async create({ request }: HttpContext) {
    /**
     * Step 1: Get credentials from the request body
     */
    const { email, password } = request.only(['email', 'password'])

    /**
     * Step 2: Verify credentials
     */
    const user = await User.verifyCredentials(email, password)

    /**
     * Step 3: Login user
     */
    const token = await User.accessTokens.create(user)

    /**
     * Step 4: Send them to a protected route
     */
    // response.redirect('/dashboard')
    return { email: user.email, token: token, }
  }

}
