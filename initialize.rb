u = User.new(:username => "USER", :email => "EMAIL", :password => "PASSWORD", :password_confirmation => "USER")
u.is_admin = true
u.is_moderator = true
u.save

t = Tag.new
t.tag = "test"
t.save
