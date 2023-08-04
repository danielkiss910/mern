import React, { useState, useEffect } from "react";

export const ListOfBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/api")
      .then(data => console.log(data))
    }, []) // Mindig legyen ures array, hogy egyszer fusson le - nem korlatlan API-nal fontos!

    

    return(
        <div>
            This is the list of books.
        </div>
    )
}
