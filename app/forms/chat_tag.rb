class ChatTag
  include ActiveModel::Model
  attr_accessor :title, :content, :name, :user_id

  with_options presence: true do
    validates :content
    validates :name
  end

  def save
    chat = Chat.create(title: title, content: content, user_id: user_id)
    tag = Tag.create(name: name)

    TweetTagRelation.create(tweet_id: tweet.id, tag_id: tag.id)
  end

end
