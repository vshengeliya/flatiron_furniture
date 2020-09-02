class AddQuantityToCarts < ActiveRecord::Migration[6.0]
  def change
    add_column :carts, :quantity, :integer
  end
end
