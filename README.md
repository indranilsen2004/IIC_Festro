# IIC_Festro

HTML, CSS
Indranil, Sohan write all the edits here

Backend
Adrito, Samharih write all the edits here

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sketch Layout</title>

<style>
    body {
        margin: 0;
        background: #eef3ff;
        font-family: Arial, sans-serif;
    }

    /* ---------- Fixed Header ---------- */
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        background: #0a3d91;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        font-weight: bold;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    }

    /* ---------- Responsive Grid Container ---------- */
    .container {
        margin-top: 90px;
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-gap: 20px;
    }

    /* ---------- Button Boxes ---------- */
    .box {
        background: #1a73e8;
        border-radius: 14px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        transition: 0.3s ease-in-out;
    }

    /* Hover Effect (Glowing Animation) */
    .box:hover {
        transform: translateY(-6px);
        box-shadow: 0 0 25px rgba(0,123,255,0.9);
    }

    /* Images inside boxes */
    .box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
    }

    /* Small box */
    .box-small {
        height: 80px;
    }

    /* Long bottom box */
    .box-long {
        height: 120px;
        grid-column: span 2;
    }

    /* Responsive fix for smaller screens */
    @media (max-width: 600px) {
        .box-long {
            grid-column: span 1;
        }
    }

</style>
</head>
<body>

    <div class="header">
        Fixed Header
    </div>

    <div class="container">

        <!-- First row -->
        <div class="box"><img src="img1.jpg"></div>
        <div class="box"><img src="img2.jpg"></div>

        <!-- Second row -->
        <div class="box"><img src="img3.jpg"></div>
        <div class="box box-small"><img src="img4.jpg"></div>
        <div class="box"><img src="img5.jpg"></div>

        <!-- Long bottom box -->
        <div class="box box-long"><img src="img6.jpg"></div>

    </div>

</body>
</html>