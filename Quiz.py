import time
traits = []
hint = ["hint", "a hint", "Hint", "A hint", "A Hint"]
answer = ["answer", "an answer", "Answer", "the answer", "The Answer"]

add_trait = ["add", "add person", "add trait", "add traits", "adding traits", "adding trait"]
recognize_person = ["recognize person", "person", "camera"]

trait_test = input("Do you want to add or recognize a person?")
if trait_test in add_trait:    
    person_name = input("Name of Person:")
    print("This person is: " + person_name)
    
    time.sleep(3)

    n = int(input("How many traits will you be adding?"))
    
    for i in range(0, n): 
        trait = input("Enter personality traits about the person (ideally we would want our model to be able to tell the physical ones): ") 
        traits.append(trait)

elif trait_test in recognize_person:
    person_test = input("Who do you think this is?")
    if person_test == person_name:
        print("Good job! You were correct!")
    else:
        hint_answer = input("Good effort, but you were incorrect. Would you like a hint or the answer? (We would probably have buttons for this)")
        if hint_answer in hint:
            print("I did not have enough time to finish this") 
        elif hint_answer in answer:
            print("I didn't have enough time to finish this")
        else:
            print("ok then")

else:
    print("not an option whoopsie")