
const {v4: uuidv4} = require('uuid');

const {Feed} = require('../models');
const feedService = require('./../services/feed')

// const handleListFeeds = async(req, res)=> {
const list = async (req, res)=> {
    try{
        const {category} = req.query; 
        const data = await feedService.listFeed(category); 
        res.json({
            status: "OK",
            message: "Success",
            data
        }) 
    } catch (err){
        res.status(err.statusCode).json({
            status: "FAIL",
            message: err.message,
        })
    }
}

// const handleDetailFeeds = (req, res, next)=> {
const detail = (req, res, next)=> {
    // res.json(req.feed);
    res.json({
        status: "OK",
        message: "Success",
        data: req.feed
    }) 
}

// const handleDeleteFeeds = async (req, res)=> {
const destroy = async (req, res)=> {
    try{
        const id = req.feed.id;
        await feedService.deleteFeedById(id);
        res.json({
            status: "OK",
            message: "Successfully deleted"
        })
    }catch(err){
        res.status(err.statusCode).json({
            status: "FAIL",
            message: err.message,
        })
    }
}

// const handlePostFeeds = async (req, res)=> {
const create = async (req, res)=> {
    try{
        const body = req.body;
        const data = await feedService.createFeed(body);
        res.json({
            status: "OK",
            message: "Successfully created",
            data
        }) 
    }catch(err){
        res.status(err.statusCode).json({
            status: "FAIL",
            message: err.message,
        })
    }
}

// const handlePutFeeds = async (req, res)=> {
const update = async (req, res)=> {
    try{
        const {id} = req.feed;
        const body = req.body;
        const data = await feedService.updateFeedById(id, body);
        res.json({
            status: "OK",
            message: "Successfully updated",
            data
        }) 
    }catch(err){
        res.status(err.statusCode).json({
            status: "FAIL",
            message: err.message,
        })
    }
}

const findAndSetFeedsById = async (req, res, next)=> {
    try{
        const id = req.params.id;
        const feed = await feedService.getFeedById(id);
        req.feed = feed;
        next();
    }catch(err){
        res.status(err.statusCode).json({
            status: "FAIL",
            message: err.message,
        })
    }
}

module.exports = {
    // handleListFeeds,
    // handleDetailFeeds,
    // handleDeleteFeeds,
    // handlePostFeeds,
    // handlePutFeeds
    list,
    detail,
    destroy,
    create,
    update,
    findAndSetFeedsById
}
