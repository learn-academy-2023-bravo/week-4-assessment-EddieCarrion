# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# Create a method called "number_checker"
# create a conditional statment that will determine if the number is odd or even using the modulo method
# Return a particular statment using string interpoloation based on if the number is even or odd

# def number_checker (num)
#     if num % 2 == 0 
#         '#{num} is even'
#     else 
#         '#{num} is odd'
#     end

# end


# reposts1 = 7
# # Expected output: '7 is odd'
# reposts2 = 42
# # Expected output: '42 is even'
# reposts3 = 221
# # Expected output: '221 is odd'

# p number_checker (reposts1) outcome > '7 is odd'
# p number_checker (reposts2) outcome > '42 is even'
# p number_checker (reposts3) outcome > '221 is odd'


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# # HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete


# Create a method called "vowel_remover"
# create a variable called "vowels" that will determine if a string has vowels
# Return the strings without any vowels using the variable and the ".delete" method

# beatles_album1 = 'Rubber Soul'
# # Expected output: 'Rbbr Sl'
# beatles_album2 = 'Sgt Pepper'
# # Expected output: 'Sgt Pppr'
# beatles_album3 = 'Abbey Road'
# # Expected output: 'bby Rd'

# def vowel_remover (string)
#     vowels = "aAeEiIoOuU"
#     string.delete (vowels)
# end
# # p vowel_remover(beatles_album1) outcome > 'Rbbr Sl'
# # p vowel_remover(beatles_album2) outcome > 'Sgt Pppr'
# # p vowel_remover(beatles_album3) outcome > 'bby Rd'




# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.


# palindrome_tester1 = 'Racecar'
# # Expected output: 'Racecar is a palindrome'
# palindrome_tester2 = 'LEARN'
# # Expected output: 'LEARN is not a palindrome'
# palindrome_tester3 = 'Rotator'
# # Expected output: 'Rotator is a palindrome'

# # First create a method called "test" that takes in a string as a parameter
# # Then create a conditional statement that will determine if the string is a palindrome or not
# # Create string interpolation that will return a specific statement if the string is or is not a palindrome.


# def test (string)
#     if string.downcase == string.downcase.reverse
#         "#{string} is a palindrome"
#     else 
#         "#{string} is not a palindrome"
#     end
# end 

# p test(palindrome_tester1) outcome > 'Racecar is a palindrome'
# p test(palindrome_tester2) outcome > 'LEARN is not a palindrome'
# p test(palindrome_tester3) outcome > 'Rotator is a palindrome'