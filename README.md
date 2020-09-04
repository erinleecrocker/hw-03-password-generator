# hw-03-password-generator

Purpose of this project is to create an application that generates a random password based on user-selected criteria.

first my goal is to figure out how to do this! I was provided with the HTML, and CSS set up but now need to edit the index.js file to make it work!

I needed to create the "generate password funciton", including a prompt asking for the password size (between 8 and 128) (I added an alert if the user entered something outside of that range and a while loop to bring it back to the origional question) then a confirm asking to include uppercase, lowercase, numbers, and special characters. I also used a while loop to bring this back around if nothing was selected.

following this; as i set up another loop to run through uppercase, lowercase, numbers, and special characters as long as they were confirmed true by the user, but I ran into the problem of not being able to end the while loop I had created. Any password length in intervals of 4 did fine, but ONLY intervals of four. I researched, but when the concept of "breaks" broke down for me (which I am still a bit confused on), 
https://github.com/erinleecrocker/hw-03-password-generator/issues/1#issue-692643684
I decided to create a substring from the string produced by the while loop that matched the character length origionally chosen by the user. from there I returned that value and yay! IT WORKED! The "write password" function was able to take that value and print it in the element on the screen so Awesome.

I do want to explore other options in creating this function, I imagine there are "cleaner" and more efficient ways to accomplish this.

