class AddMountainIdToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :mountain_id, :integer
  end
end
