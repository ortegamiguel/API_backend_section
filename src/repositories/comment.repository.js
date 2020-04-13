const BaseRepository = require('./base.repository')
let _commment = null;

class CommentRepository extends BaseRepository {
    constructor({Comment}){
        super(Comment);
        _commment = Comment;
    }

    async getUserIdeas(author){
        return await _idea.find({author});
    }

}

module.exports = CommentRepository;