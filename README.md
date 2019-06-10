# DB設計
***

### usersテーブル
***

| Column | Type | Options |
| ------ | ---- | ------- |
| nickname | string | null: false |
| email | string | unique: true, null: false |
| password | string | null: false |
| first_name | string | null: false | <!-- 姓 -->
| last_name | string | null: false | <!-- 名 -->
| kana_first_name | string | null: false | <!-- 姓カナ -->
| kana_last_name | string | null: false | <!-- 名カナ -->
| birthday_year | integer | null: false | <!-- 年 -->
| birthday_month | integer | null: false | <!-- 月 -->
| birthday_day | integer | null: false | <!-- 日 -->
| tel | integer | unique: true | <!-- 電話番号 -->

#### Association
* has_one :adress, dependent: :destroy
* has_many :comments, dependent: :destroy
* has_many :likes, dependent: :destroy
* has_many :points, dependent: :destroy
* has_many :creditcards, dependent: :destroy
* has_many :items, dependent: :destroy


## addressesテーブル
***
| Column | Type | Options |
| ------ | ---- | ------- |
| post_id | integer | null: false | <!-- 郵便番号 -->
| prefecture | string | null: false | <!-- 都道府県 -->
| city | string | null: false | <!-- 市区町村 -->
| address | string | null: false | <!-- 番地 -->
| building | string | | <!-- 建物名 -->

#### Association
* belongs_to :user


### comentsテーブル
***

| Column | Type | Options |
| ------ | ---- | ------- |
| text | text | null: false |
| user_id | integer | foreign_key: true, null: false | <!-- 外部キー制約 -->
| item_id | integer | foreign_key: true, null: false | <!-- 外部キー制約 -->
  
#### Association
* belongs_to :user
* belongs_to :item

<!-- ジャンル1階層目 -->
### first_genresテーブル
***

| Column | Type | Options |
| ------ | ---- | ------- |
| genre | string | null: false |


#### Association
* has_many :second_genres
* has_many :items

<!-- ジャンル2階層目 -->
### second_genresテーブル　
***

| Column | Type | Options |
| ------ | ---- | ------- |
| genre | string | null: false |
| first_genre_id | integer | null: false |

#### Association
* belongs_to :first_genre
* has_many :third_genres
* has_many :items

<!-- ジャンル3階層目 -->
### third_genresテーブル
***

| Column | Type | Options |
| ------ | ---- | ------- |
| genre | string | null:false |
| second_genre_id | integer | null: false |

#### Association
* belongs_to :second_genre
* has_many :items

<!-- イイネ機能 -->
### likesテーブル
***

| Column | Type | Options |
| ------ | ---- | ------- |
| user_id | integer | foreign_key: true, null: false |
| item_id | integer | foreign_key: true, null: false |

#### Association
* belongs_to :user
* belongs_to :item

<!-- 取引終了までに出品者に付与されるポイント -->
### pointsテーブル
***

| Column | Type | Options |
| ------ | ---- | ------- |
| profit | integer | null: false | <!-- 金額 - 手数料10% -->
| user_id | integer | foreign_key: true, null: false |
| item_id | integer | foreign_key: true, null: false |

#### Association
* belongs_to :user
* belongs_to :item

<!-- ユーザーの評価 -->
### evaluatesテーブル
***

| Column | Type | Options |
| ------ | ---- | ------- |
| text | string | |
| saler_id | integer | foreign_key: true, null: false | <!-- 未取引商品 -->
| buyer_id | integer | foreign_key: true, null: false | <!-- 購入済商品 -->
| rate | string | null:false | <!-- 評価 -->

#### Association
* belongs_to :saler, class_name: "User" <!-- ユーザーテーブルのidとitemsテーブルのsaler_idが紐づく -->
* belongs_to :buyer, class_name: "User" <!-- ユーザーテーブルのidとitemsテーブルのbuyer_idが紐づく -->

<!-- クレジット情報 -->
### creditcardsテーブル
***

| Column | Type | Options |
| ------ | ---- | ------- |
| user_id | integer | foreign_key: true, null: false |
| card_number | integer | unique: true, null: false | 
| security_code | integer | null: false | 
| limit_year | integer | null: false |
| limit_month | integer | null: false |


#### Association
* belongs_to :user


### itemsテーブル
***

| Column | Type | Options |
| ------ | ---- | ------- |
| name | string | null: false |
| text | text | null: false |
| image | string | null: false |
| condition | string | null: false |
| saler_id | integer | foreign_key: true, null: false | <!-- 未取引表品 -->
| buyer_id | integer | foreign_key: true, null: false | <!-- 購入済商品 -->
| first_genre_id | integer | null: false | <!-- ジャンル1階層目 -->
| second_genre_id | integer | null: false | <!-- ジャンル2階層目 -->
| third_genre_id | integer | | <!-- ジャンル3階層目 -->
| size | string | | <!-- サイズ(衣類・靴限定) -->
| postage | string | null: false | <!-- 送料 -->
| sending_region | string | null: false | <!-- 発送元地域 -->
| shipping_day | string | null: false | <!-- 発送期間 -->
| price | integer | null: false | <!-- 価格 -->
| shipping_style | string | null: false | <!-- 発送方法 -->


#### Association
* belongs_to :saler, class_name: "User"
* belongs_to :buyer, class_name: "User"
* belongs_to :first_genre
* belongs_to :second_genre
* belongs_to :third_genre
* has_many :comments

<!-- 出品中商品 -->
### sellingsテーブル
***

| Column | Type | Options |
| ------ | ---- | ------- |
| item_id | integer |null: false |
| saler_id | integer | null: false |
| buyer_id | integer | null: false |


#### Association
* belongs_to :item
* belongs_to :saler, class_name: "User" <!-- ユーザーテーブルのidとitemsテーブルのsaler_idが紐づく -->
* belongs_to :buyer, class_name: "User" <!-- ユーザーテーブルのidとitemsテーブルのbuyer_idが紐づく -->


<!-- 購入済商品 -->
### soldsテーブル
***

| Column | Type | Options |
| ------ | ---- | ------- |
| item_id | integer |null: false |
| saler_id | integer | null: false |
| buyer_id | integer | null: false |


#### Association
* belongs_to :item
* belongs_to :saler, class_name: "User" <!-- ユーザーテーブルのidとitemsテーブルのsaler_idが紐づく -->
* belongs_to :buyer, class_name: "User" <!-- ユーザーテーブルのidとitemsテーブルのbuyer_idが紐づく -->
