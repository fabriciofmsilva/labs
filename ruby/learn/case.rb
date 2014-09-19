#!/usr/bin/ruby

op = 1

# if op = 1
#   message = "One"
# end
# if op = 2
#   message = "Two"
# end
# if op = 3
#   message = "Three"
# end

case op
  when 1
    message = "One"
  when 2
    message = "Two"
  when 3
    message = "Three"
  else
    message = "Another value"
end

puts message
