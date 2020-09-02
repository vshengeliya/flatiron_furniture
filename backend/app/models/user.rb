class User < ApplicationRecord
  has_many :carts
  has_many :items, through: :carts

end


