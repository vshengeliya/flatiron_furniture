class Cart < ApplicationRecord
  belongs_to :user
  belongs_to :item

  after_initialize :init

  def init
    self.quantity ||= 1
  end

end


