const services = require('../services/service');

exports.createProduct = async(req, res) => {

    try {
        const products = await services.createProduct(req.body);
        return res.status(201).json({
            data: products,
            success: true,
            message: 'Successfully create the products',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to  create the products',
            err: error
        });
    }

}

exports.getProduct = async(req, res) => {

    try {
        console.log(req.query)
        const products = await services.getProduct(req.query);
        return res.status(201).json({
            data: products,
            success: true,
            message: 'Successfully Fetched the products',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to  Fetched the products',
            err: error
        });
    }

}

// retrieve and return all users/ retrive and return a single user
exports.find = async(req, res) => {


    try {
        const products = await services.find(req.params.id);
        return res.status(201).json({
            data: products,
            success: true,
            message: 'Successfully Fetched the product',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to  Fetched the product',
            err: error
        });
    }

}