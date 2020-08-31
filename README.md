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
- has_many :learns
- has_one :play

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

## learns テーブル

| Column   | Type       | Options                        |
| -------- | ---------- | ------------------------------ |
| quiz     | string     | null: false                    |
| numbers  | integer    | null: false                    |
| user     | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- has_many :choices

## messages テーブル

| Column   | Type       | Options                        |
| -------- | ---------- | ------------------------------ |
| choice   | string     | null: false                    |
| answer   | boolean    | null: false, default: false    |
| learn_id | references | null: false, foreign_key: true |

### Association

- belongs_to :learn

## plays テーブル

| Column   | Type       | Options                        |
| -------- | ---------- | ------------------------------ |
| user     | references | null: false, foreign_key: true |

### Association

- belongs_to :user