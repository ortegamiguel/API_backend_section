const BaseRepository = require('./base.repository');

class CommentRepository extends BaseRepository {
    constructor({Comment}){
        super(Comment);
    }

    async getUserIdeas(author){
        return await _idea.find({author});
    }

}

module.exports = CommentRepository;