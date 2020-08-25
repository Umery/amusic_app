require 'rails_helper'
describe Chat, type: :model do
  before do
    @chat = FactoryBot.build(:chat)
  end

  describe '質問投稿' do
    context '質問投稿がうまくいくとき' do
      it '空白がなければ投稿できる' do
        expect(@chat).to be_valid
      end
      it 'titleが空でも投稿できる' do
        @chat.title = ' '
        expect(@chat).to be_valid
      end
      it 'imageが空でも登録できる' do
        @chat.image = ' '
        expect(@chat).to be_valid
      end
    end

    context '質問投稿がうまくいかないとき' do
      it 'category_idが1だと登録できない' do
        @chat.category_id = '1'
        @chat.valid?
        expect(@chat.errors.full_messages).to include('カテゴリーを選択してください')
      end
      it 'contentが空だと登録できない' do
        @chat.content = ' '
        @chat.valid?
        expect(@chat.errors.full_messages).to include('質問内容を入力してください')
      end
    end
  end
end
