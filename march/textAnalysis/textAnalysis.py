#!/usr/bin/env python3
"""
PART A
Note:- In Part-A, you won't be getting any output as we are just storing the string and creating a class.
Step-1 Define a string.
"Lorem ipsum dolor! diam amet, consetetur Lorem magna. sed diam nonumy eirmod tempor. diam et labore? et diam magna. et diam amet."
Hint:- Use a variable and store the above string.
For achieving the tasks mentioned in the scenario, We need to create a class with 3 different methods

Step-2 Define the class and its attributes:
Create a class named TextAnalyzer.
Define the constructor __init__ method that takes a text argument.

Step-3 Implement a code to Format the text in Lowercase:
    Inside the constructor,we will convert the text argument to lowercase using the lower() method.
    Then, will Remove punctuation marks (periods, exclamation marks, commas, and question marks) from the text using the replace() method.
    At last, we will Assign the formatted text to a new attribute called fmtText.
    Here we will be Updating the above TextAnalyzer class with points mentioned above.

Step-4 Implement a code to count the Frequency of all unique words:
    In this step, we will Implement the freqAll() method with the below parameters:
        Split the fmtText attribute into individual words using the split() method.
        Create an empty dictionary to store the word frequency.
        Iterate over the list of words and update the frequency dictionary accordingly.
        Use count method for counting the occurence
        Return the frequency dictionary.
        Update the above TextAnalyzer class with points mentioned above.Step-4 Implement a code to count the Frequency of all unique words:
        In this step, we will Implement the freqAll() method with the below parameters:
        Split the fmtText attribute into individual words using the split() method.
        Create an empty dictionary to store the word frequency.
        Iterate over the list of words and update the frequency dictionary accordingly.
        Use count method for counting the occurence
        Return the frequency dictionary.
        Update the above TextAnalyzer class with points mentioned above.

Step-5 Implement a code to count the Frequency of a specific word:






    *In step-5, we have to Implement the freqOf(word) method that takes a word argument:

        Create method and pass the word that need to be found
        Get the freqAll method for look for count and check if that word is in the list.
        Return the count.
        Update the above TextAnalyzer class with points mentioned above.

Part-B
In Part B, we will be calling the functions created in Part A, allowing the functions to execute and generate output.

Step-1 Create an instance of TextAnalyzer Class.¶
Step-2 Call the function that converts the data into lowercase
Step-3 Call the function that counts the frequency of all unique words from the data.¶
Step-4 Call the function that counts the frequency of specific word
Here, we will call the function that counts the frequency of the word "lorem"

Print the output.**
"""
givenstring="Lorem ipsum dolor! diam amet, consetetur Lorem magna. sed diam nonumy eirmod tempor. diam et labore? et diam magna. et diam amet."

class TextAnalyzer(object):
    def __init__(self, text):
        # remove punctuation
        formattedText = text.replace('.','').replace('!','').replace('?','').replace(',','')

        # make text lowercase
        formattedText = formattedText.lower()

        self.fmtText = formattedText

    def freqAll(self):
        # split text into words
        wordList = self.fmtText.split(' ')

        # create dictionary
        freqMap = {}
        for word in set(wordList): # use set to remove duplicates in List
            freqMap[word] = wordList.count(word)
        return freqMap

    def freqOf(self, word):
        # get frequency map
        freqDict = self.freqAll()

        if word in freqDict:
            return freqDict[word]
        else:
            return 0

# Step-1 Create an instance of TextAnalyzer class
analyzed = TextAnalyzer(givenstring)

# Step-2 Call the function that converts the data into lowercase
print("Formatted Text:", analyzed.fmtText)

# Step-3 Call the function that counts the frequency of all unique words from the data
freqMap = analyzed.freqAll()
print(freqMap)

# Step-4 Call the function that counts the frequency of specific word
# Here, we will call the function that counts the frequency of the word "lorem"
word = "lorem"
frequency = analyzed.freqOf(word)
print("The word",word,"appears",frequency,"times.")

# We have successfully calculated the frequency of all specified words.
