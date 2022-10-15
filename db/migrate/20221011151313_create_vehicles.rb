class CreateVehicles < ActiveRecord::Migration[7.0]
  def change
    create_table :vehicles do |t|
      t.string :name
      t.string :image
      t.string :price
      t.string :damage_rate
      t.boolean :is_in_display, default: true, null: false

      t.timestamps
    end
  end
end
