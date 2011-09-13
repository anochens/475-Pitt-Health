class Entry < ActiveRecord::Base
  attr_accessible :entry_type, :json_blob

  ENTRY_TYPES = [:MENU, :ITEM, :ENDPAGE]

  validates :entry_type, :inclusion => ENTRY_TYPES.map{|e| e.to_s}

  validates_each :json_blob do |record, attr, value|
	 j = ActiveSupport::JSON

	 begin
		 v = j.decode(value).to_s
    rescue
		 record.errors.add attr, "must be valid JSON"
	 end
  end

  before_validation do
  	 self.json_blob = '{}' if self.json_blob == ''
  end

  def summary
	  return "Entry #{id} (#{entry_type})"
  end   

  def prev
     getParamFromJSON('prev');
  end   

  def getParamFromJSON(name) 
	 j = ActiveSupport::JSON

	 blob = @json_blob || '{}'

    v = j.decode(blob)

	 if v.include?(name) && !v[name].nil?
		 return v[name]
	 end   
	 'alan'
  end  
end

                                       
