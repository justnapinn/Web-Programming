document.addEventListener('DOMContentLoaded', function () {
    // Fetch the XML file
    fetch('bookstore.xml')
    .then(response => {
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    return response.text();
    })
    .then(xmlString => {
    // Parse the XML string into an XML Document
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");
    // Extract book details from XML
    const books = xmlDoc.getElementsByTagName('book');
    for (let i = 0; i < books.length; i++) {
    const title = books[i].getElementsByTagName('title')[0].textContent;
    const author = books[i].getElementsByTagName('author')[0].textContent;
    const price = books[i].getElementsByTagName('price')[0].textContent;
    // Display the book details in the console
    console.log(`Book ${i + 1}:`);
    console.log(`Title: ${title}`);
    console.log(`Author: ${author}`);
    console.log(`Price: $${price}`);
    }
    })
    .catch(error => {
    console.error('Error fetching or parsing the XML file:', error);
    });
    });
    