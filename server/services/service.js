const product = require('../model/index.js')

exports.createProduct = async(data) => {

    try {
        console.log(data)
        const product_item = await product.create(data);
        return product_item;
    } catch (error) {
        console.log("Something went wrong to create data to database");
        throw { error };
    }

}

exports.getProduct = async(data) => {

    try {
        console.log(data)
        let offset = 0,
            limit = 0;
        if (data.page) // if limit and offset is not in the query parameter
            offset = parseInt(data.page)
        if (data.size)
            limit = parseInt(data.size)

        const product_item = await product.find().skip(offset).limit(limit).select('-_id id item_name item_image item_price ')

        return product_item;
    } catch (error) {
        console.log("Something went wrong to fetched data from database");
        throw { error };
    }

}

exports.find = async(id) => {
    try {
        console.log(id)
        const product_item = await product.findOne({ id: id });
        return product_item;
    } catch (error) {
        console.log("Something went wrong to fetched data from database");
        throw { error };
    }
}