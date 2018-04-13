class CreateProfessors < ActiveRecord::Migration[5.1]
  def change
    create_table :professors do |t|
      t.string  :first_name
      t.string  :last_name
      t.text    :info
      t.integer :schedule
      t.timestamps
    end
  end
end
