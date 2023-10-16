const feedRepository = require('./../repositories/feed')
const ApplicationError = require('./../../config/errors/ApplicationError')

exports.listFeed = async (category) => {
    try{
        if(category){
            const feeds = await feedRepository.getListFeedsByCategory();
            return feeds;
        }
    
        const feeds = await feedRepository.getListFeeds();
        return feeds;
    } catch (err){
        throw new ApplicationError(`Failed to get list of feeds ${err.message})`, 500)
    }
    
}


exports.createFeed = async (payload)=> {
    try{
        const feed = await feedRepository.create(payload);
        return feed;
    }catch(err){
        throw new ApplicationError(`Failed to add new feeds ${err.message})`, 500);
    }
}

exports.getFeedById = async (id)=> {
    try{
        const feed = await feedRepository.findByPk(id);
        if(!feed){
            throw new ApplicationError("Feed not found", 404);
        }
        return feed;
    }catch(err){
        throw new ApplicationError(`Failed to get feed by id: ${err.message})`, err.statusCode || 500);
    }
}

exports.updateFeedById = async (id, payload)=> {
    try{
        const [_, data] = await feedRepository.update(id, payload);
        // if(!feed){
        //     throw new ApplicationError("Feed not found", 404);
        // }
        return data;
    }catch(err){
        throw new ApplicationError(`Failed to update feed by id: ${err.message})`, 500);
    }
}

exports.deleteFeedById = async (id)=> {
    try{
        return await feedRepository.destroy(id);
    }catch(err){
        throw new ApplicationError(`Failed to delete feed by id: ${err.message})`, 500);
    }
}
