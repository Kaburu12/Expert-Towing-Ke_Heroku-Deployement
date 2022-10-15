class Request < ApplicationRecord
    validates :phone,length:{minimum:8}
    validates :phone,length:{maximum:12}

    belongs_to :user
end
