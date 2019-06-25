# ルート
crumb :root do
  link "メルカリ", root_path
end

# マイページ
crumb :mypage do
  link "マイページ", mypage_users_path
end

# プロフィール
crumb :profile do
  link "プロフィール", edit_user_path
  parent :mypage
end

# 本人情報編集
crumb :info do
  link "本人情報の登録", info_user_path
  parent :mypage
end

# ログアウト
crumb :logout do
  link "ログアウト", logout_users_path
  parent :mypage
end

# 商品詳細
crumb :item do |item|
  link "#{item.name}", item_path
end
