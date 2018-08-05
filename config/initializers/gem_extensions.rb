%w(rails).each do |ext|
  Dir[File.join(Rails.root, "lib", "extensions", ext, "*.rb")].each {|l| require l }
end
