// HTML CODE FOR TOP MENU FOUND IN EVERY PAGE
// in order to avoid repetition, this JS file can be imported in the header
    // of every page in order to add the menu found on the top of the website
document.write('\
<!DOCTYPE html>\
<html lang="en">\
\
<head>\
    <title>Top Menu</title>\
\
    <!-- links css file --> \
    <link rel="stylesheet" href="style-topmenu.css">\
\
</head>\
\
\
<body>\
    <!-- START OF MENU DOCUMENTATION --> \
    <div class="menu">\
\
\
        <!-- START OF UPPER PORTION OF THE MENU --> \
        <div class="upper-menu">\
\
            <!-- START OF CONTACT SECTION --> \
            <div class="contact">\
\
                <h5 >Contact us!</h5>\
                <!-- \
                    stylization of images are in the HTML file so each image can\
                     fit on the menu according to the size of the original image\
                --> \
                <img src="icons/phoneicon.png" alt="phone icon" height="18px" width="auto"><h5>123-456-7890</h5>\
                <img src="icons/emailicon.png" alt="email icon" height="20px" width="auto"><h5>contact@ink.com</h5>\
\
            </div>\
            <!-- END OF CONTACT SECTION --> \
\
\
            <!-- START OF PROFILE SECTION --> \
            <div class="upper-profile">\
            <img src="icons/hearticon.png" alt="heart icon" height="18px" width="auto">\
            <a href="wishlist.html"><h5>Wishlist</h5></a>\
            <img src="icons/profileicon.png" alt="profile icon" height="18px" width="auto">\
            <a href="login-display.html"><h5>John Deer</h5></a>\
            </div>\
            <!-- END OF PROFILE SECTION --> \
\
        </div>\
        <!-- END OF UPPER PORTION OF THE MENU --> \
\
\
        <!-- LINE THAT DIVIDES UPPER AND LOWER PORTIONS --> \
        <hr class="upper-menu-line">\
\
\
        <!-- START OF LOWER PORTION OF THE MENU --> \
        <div class="options">\
\
            <!-- PAGE TITLE --> \
            <div class="title">\
                <a href="index.html"><h1>Ink</h1></a>\
            </div>\
\
            <!-- START OF DROP DOWN MENU --> \
            <!-- HOW THE DROP DOWN MENU WORKS IS EXPLAINED IN THE CSS FILE--> \
            <div class="selections">\
                <ul>\
                    <li>\
                        <div class="selection-dropdown">\
                            <h4 class="fiction-button">Fiction</h4>\
                            <div class="selection-dropdown-content">\
                                <a href="">Fantasy</a>\
                                <a href="">Adventure</a>\
                                <a href="">Romance</a>\
                            </div>\
                        </div>\
                    </li>\
                    <li>\
                        <div class="selection-dropdown">\
                        <h4 class="Nonfiction-button">Nonfiction</h4>\
                            <div class="selection-dropdown-content">\
                                <a href="">History</a>\
                                <a href="">Philosophy</a>\
                                <a href="">Science</a>\
                            </div>\
                        </div>\
                    </li>\
                    <!--\
                    <li>\
                        <div class="selection-dropdown">\
                            <h4 class="Author-button">Author</h4>\
                            <div class="selection-dropdown-content">\
                                <a href="">-------</a>\
                                <a href="">-------</a>\
                                <a href="">-------</a>\
                            </div>\
                        </div>\
                    </li>\
                    -->\
                </ul>\
            </div>\
\
            <!-- SEARCH BAR --> \
            <div class="search">\
                <input type="text" placeholder="Titles, Authors, ISBN, Genre . . .">\
            </div>\
\
            <!-- SHOPPING CART -->\
            <div class="shopping-cart">\
                <a href="shopping-cart.html"><img src="icons/carticon.png" alt="" height="25px" width="auto"></a>\
            </div>\
\
\
        </div>\
        <!-- END OF THE LOWER PORTION OF THE MENU --> \
    </div>\
</body>\
\
')
