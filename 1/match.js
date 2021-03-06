let express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/", function (req, res) {
    res.send(`
    <!DOCTYPE html>
<html>
    <head>
        <title>MEMORY GAME</title>

        <style>

            #wrapper {
            width: 800px;
            }

            .main {
            width: 100%;
            border: 1px solid black;
            }

            #gameboard {
            margin: 0 auto;
            width: 610px;
            }

            #message {
            text-align: center;
            padding: 20px;
            font-size: 30px;
            }

            .btn
            {
                background: #3498db;
                text-align: center;
                -webkit-border-radius: 28;
                -moz-border-radius: 28;
                border-radius: 28px;
                font-family: Arial, Helvetica, sans-serif;
                color: #ffffff;
                font-size: 20px;
                padding: 10px 20px 10px 20px;
                text-decoration: none;
            }

            .btn:hover
            {
                background: #3cb0fd;
                text-decoration: none;
            }

            .flipImage {
                width: 100%;
                border: 1px solid black;
            }

            .gameTile {
                padding: 2px;
                width: 147px;
                display: inline-block;
            }

        </style>
    </head>

    <body>

        <div id="wrapper">
            <div id="start" class="btn">شروع</div>
            <div id="score"></div>
            <div id="message"></div>
            <div id="gameboard"></div>
        </div>
        
        <script src="/codes.js"></script>

    </body>
</html>
    `)
  })




  app.listen(process.env.PORT || 3000, () => console.log("Server is running..."))