class ChatTag
  include ActiveModel::Model
  attr_accessor :title, :content, :image, :name, :user_id

  with_options presence: true do
    validates :content
    validates :name
  end

  def save
    chat = Chat.create(title: title, content: content, image: image, user_id: user_id)
    tag = Tag.where(name: name).first_or_initialize
    tag.save

    ChatTagRelation.create(chat_id: chat.id, tag_id: tag.id)
  end

end
