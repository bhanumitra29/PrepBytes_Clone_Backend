const htmlcancelpage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <style>
        .mainDiv {
            display: flex;
            align-items: center;
            margin: auto;
            flex-direction: column;
            text-align: center;
        }

        .continueShop {
            text-decoration: none;
            color: white;
            background-color: #FF4252;
            display: inline-block;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            margin-top: 20px;
        }

        .continueShop:hover {
            text-decoration: underline;
        }

        .successIcon {
            color: #4CAF50;
            font-size: 48px;
            margin-bottom: 20px;
        }

        a {
            text-decoration: none;
        }
    </style>
    <title>Payment Successful</title>
</head>
<body>
    <div class="mainDiv">
        <div>
            <i class="fas fa-check-circle successIcon"></i>
            <h1>Payment successfully completed</h1>
        </div>

        <div>
            <a href="https://eclectic-kheer-766cc2.netlify.app/" class="continueShop">
                Go To Homepage <i class="fas fa-arrow-right" style="margin-left: 5px;"></i>
            </a>
        </div>
    </div>
</body>
</html>

`;

module.exports = {htmlcancelpage}