# # config valid for current version and patch releases of Capistrano
# lock "~> 3.11.0"

# set :application, 'freemarket_52C'
# set :repo_url, "git@github.com:kokeinter/freemarket_52C.git"

# set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system', 'public/uploads')

# set :rbenv_type, :user
# set :rbenv_ruby, '2.5.1'
# #カリキュラム通りに進めた場合、2.5.1か2.3.1です

# set :ssh_options, auth_methods: ['publickey'],
#                   keys: ['~/.ssh/intercxihiaguku.pem']

# set :unicorn_pid, -> { "#{shared_path}/tmp/pids/unicorn.pid" }
# set :unicorn_config_path, -> { "#{current_path}/config/unicorn.rb" }
# set :keep_releases, 5
# set :default_env, {
#   rbenv_root: "/usr/local/rbenv",
#   path: "/usr/local/rbenv/shims:/usr/local/rbenv/bin:$PATH",
#   AWS_ACCESS_KEY_ID: ENV["AWS_ACCESS_KEY_ID"],
#   AWS_SECRET_ACCESS_KEY:ENV["AWS_SECRET_ACCESS_KEY"],
#   BASIC_AUTH_USER: ENV["BASIC_AUTH_USER"],
#   BASIC_AUTH_PASSWORD: ENV["BASIC_AUTH_PASSWORD"]
# }
# set :linked_files, %w{ config/secrets.yml }

# after 'deploy:publishing', 'deploy:restart'
# namespace :deploy do
#   task :restart do
#     invoke 'unicorn:restart'
#   end

#   desc 'upload secrets.yml'
#   task :upload do
#     on roles(:app) do |host|
#       if test "[ ! -d #{shared_path}/config ]"
#         execute "mkdir -p #{shared_path}/config"
#       end
#       upload!('config/secrets.yml', "#{shared_path}/config/secrets.yml")
#     end
#   end
#   before :starting, 'deploy:upload'
#   after :finishing, 'deploy:cleanup'
# end


# config valid only for current version of Capistrano
# capistranoのバージョンを記載。固定のバージョンを利用し続け、バージョン変更によるトラブルを防止する
lock '~> 3.11.0'

# Capistranoのログの表示に利用する
set :application, 'freemarket_52C'

# どのリポジトリからアプリをpullするかを指定する
set :repo_url,  'git@github.com:kokeinter/freemarket_52C.git'

# バージョンが変わっても共通で参照するディレクトリを指定
set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system', 'public/uploads')

set :rbenv_type, :user
set :rbenv_ruby, '2.5.1'

# どの公開鍵を利用してデプロイするか
set :ssh_options, auth_methods: ['publickey'],
                  keys: ['~/.ssh/intercxihiaguku.pem']

# プロセス番号を記載したファイルの場所
set :unicorn_pid, -> { "#{shared_path}/tmp/pids/unicorn.pid" }

# Unicornの設定ファイルの場所
set :unicorn_config_path, -> { "#{current_path}/config/unicorn.rb" }
set :keep_releases, 5
set :default_env, {
  rbenv_root: "/usr/local/rbenv",
  path: "/usr/local/rbenv/shims:/usr/local/rbenv/bin:$PATH",
  AWS_ACCESS_KEY_ID: ENV["AWS_ACCESS_KEY_ID"],
  AWS_SECRET_ACCESS_KEY:ENV["AWS_SECRET_ACCESS_KEY"],
  BASIC_AUTH_USER: ENV["BASIC_AUTH_USER"],
  BASIC_AUTH_PASSWORD: ENV["BASIC_AUTH_PASSWORD"],
  PUBLIC_KEY: ENV["PUBLIC_KEY"],
  SECRET_KEY: ENV["SECRET_KEY"]
}

# デプロイ処理が終わった後、Unicornを再起動するための記述
after 'deploy:publishing', 'deploy:restart'
namespace :deploy do
  task :restart do
    invoke 'unicorn:restart'
  end
end
