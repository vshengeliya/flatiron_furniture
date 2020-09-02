class RemoveQuantityToCarts < ActiveRecord::Migration[6.0]
  def change
    remove_column :carts, :quantity, :integer
  end
end
