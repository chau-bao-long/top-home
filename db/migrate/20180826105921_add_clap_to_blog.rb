class AddClapToBlog < ActiveRecord::Migration[5.2]
  def change
    add_column :blogs, :clap, :integer, default: 0, null: false
  end
end
