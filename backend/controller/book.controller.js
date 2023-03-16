const controller = {};

const Book = require('../models/book');

controller.getAllBooks = (req, res) => {
    
    Book.find((err, docs) => {

        if(err) {

            console.log(err);
        
            res.status(404).json({
                status: 404,
                message: "Could not get the books"
            })

        } else {
          
            const data = docs;

            res.status(200).json({
                "status": 200,
                "message": "Books sucessfully obtained",
                "Books": data
            })
        
        }

    });
    
}

controller.getOneBook = (req, res) => {
    
    const search = req.params.id;

    Book.find({ title: search }, (err, docs) => {

        if(err) {

            console.log(err);

            res.status(404).json({
                status: 404,
                message: "Error"
            })

        } else {

            if(docs.length > 0) {
                
                console.log(docs[0]);

                res.status(200).json({
                    status: 200,
                    message: "Book obtained successfully",
                    book: docs
                })

            } else {

                console.log("Could not get the book, please check out the title");

                res.status(404).json({
                    status: 404,
                    message: "Could not get the book, please check out the title"
                })

            }
        

        }

   })


}

controller.createNewBook = (req, res) => {
    
    const {title, author, year, genre, publisher, pages, language, description, cover, price, availability} = req.body;

    const book = new Book({
        title,
        author,
        year,
        genre,
        publisher,
        pages,
        language,
        description,
        cover,
        price,
        availability
    });

    book.save((err) => {
        
        if(err) {
           
            console.log(err);

            res.status(404).json({
                status: 404,
                message: "Could not create the book"
            })

        } else {

            console.log("Book Saved");
        
            res.status(201).json({
                status: 201,
                message: "Book created successfully"
            })

        }
    });
    
}

controller.updateOneBook = async (req, res) => {
    
    if(!req.body) {
        res.status(404).json({
            status: 404,
            message: "Could not update the book"
        });
    }
    
    try {

        const book = await Book.findByIdAndUpdate(req.params.bookId, {

            title: "el mas nazi"

        }, {new: true});

        if(!book) {
            res.status(404).json({
                status: 404,
                message: "The book was not found"
            });
        }

        res.status(200).json({
            status: 200,
            message: "Book updated successfully"
        })


    } catch(err) {
        
        if(err) {
            res.status(404).json({
                status: 404,
                message: "Error"
            });
        }
    }

};

controller.deleteOneBook = (req, res) => {
    
    const id = req.params.id;

   Book.findOneAndDelete({ title: id }, (err) => {

    if(err) {
        console.log(err);

        res.status(404).json({
            status: 404,
            message: "Error"
        })

    } else {

        console.log("Book Deleted");
    
        res.status(202).json({
            status: 202,
            message: "Book Deleted"
        })

    }

   })

}

module.exports = controller;