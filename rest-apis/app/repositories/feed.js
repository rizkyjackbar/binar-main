const { Feed } = require('./../models');

exports.getListFeeds = () => {
    return Feed.findAll();
}

exports.getListFeedsByCategory = () => {
    return Feed.findAll({ where: {category} });
}

exports.create = (payload)=> {
    return Feed.create(payload);
}

exports.findByPk = (id) => {
    return Feed.findByPk(id);
}

exports.update = (id, payload) => {
    return Feed.update(payload, {where:{id}, returning: true})
}

exports.destroy = (id) => {
    return Feed.destroy({where: {id}});
}
