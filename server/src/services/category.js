import db from '../models'

export const getCategoriesService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Category.findAll({
            raw: true,
            attributes: ['code', 'value' ]
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Faild to get category',
            response
        })
    } catch (error) {
        reject(error)
    }
})

