from bs4 import BeautifulSoup as bs
directory = "../index.html"
with open(directory) as file:
    soup = bs(file.read(), "html.parser")
    print(soup)
