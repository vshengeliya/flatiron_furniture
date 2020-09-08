class Item < ApplicationRecord
  has_many :carts
  has_many :users, through: :carts

  include PgSearch
  pg_search_scope :search_content_for, against: [:title, :category, :description],
      using: { tsearch: { any_word: true } }


  def self.search_by(search_term)
    where("LOWER(title) LIKE :search_term
           OR LOWER(description) LIKE :search_term
           OR LOWER(category) LIKE :search_term", search_term: "%#{search_term.downcase}%")
  end

end
