# テーブル設計

## users テーブル

| Column     | Type   | Options     |
| ---------- | ------ | ----------- |
| name       | string | null: false |
| email      | string | null: false |
| password   | string | null: false |
| instrument | string |             |

### Association

- has_many :chats
- has_many :messages

## chats テーブル

| Column   | Type       | Options                        |
| -------- | ---------- | ------------------------------ |
| category | integer    | null: false                    |
| content  | text       | null: false                    |
| image    | text       |                                |
| user     | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- has_many :messages

## messages テーブル

| Column  | Type       | Options     |
| ------- | ---------- | ----------- |
| text    | text       | null: false |
| user_id | integer    | null: false |
| chat_id | integer    | null: false |

### Association

- belongs_to :chat
- belongs_to :user