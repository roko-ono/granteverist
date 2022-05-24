function init() {

    //--SET UP BUTTONS COLOURS

    var GroupButtons = $("div.tag");



    $.each(GroupButtons, function (index, value) {



        $(value).css("background-Color", "white");


    });


    //--SET UP ELEMENT TAG LIST TO DISPLAY TAGS
    var elementItems = $("div.item.col-md-3");
    $.each(elementItems, function (index, thisItem) {
        var counter = 0;

        var tagString = $(thisItem).attr('data-item-tags');

        tagString = tagString.replace(/,/g, " /\r");


        var childElement1 = $(thisItem).children()[0];



        var childElement2 = $(childElement1).children(".item-tags")[0];

        $(childElement2).html(tagString);


    });
}

function filter() {

    //--SET BUTTON COLOUR
    var buttonBackgroundColor = element.style.backgroundColor;

    if (buttonBackgroundColor == "white") {

        element.style.backgroundColor = "pink";


    } else {

        element.style.backgroundColor = "white";

    }

    var hideArray = [];
    var showArray = [];
    var answerElement = element.id;


    //--TOGGLE THE CLASS OF THIS BUTTON
    $(element).toggleClass("show");

    //--GET ALL THE ITEM ELEMENTS 
    var elementItems = $("div.item.col-md-3");

    //--GET ALL THE TAG BUTTON ELEMENTS 
    var activeTagList = $("div.HYPE_element.tag.show");



    var dataListItems = [];
    ///---->
    //--GET THE TAG  
    $.each(activeTagList, function (index, tagValue) {
        var tagged = $(tagValue).attr('id');

        dataListItems.push(tagged);

    });

    ///---<


    ///---->>-
    //--ITERATE OVER THE ITEM ELEMENTS
    $.each(elementItems, function (index, thisItem) {
        var counter = 0;

        //--GET IT'S  TAG LIST FROM THE DATA ATTRIB.
        var tagArray = $(thisItem).attr('data-item-tags').split(",");


        ///---->
        //--ITERATE OVER THE ACTIVE TAGS
        $.each(dataListItems, function (index, thisDataItem) {
            var tags = tagArray.indexOf(thisDataItem);
            console.log(tags);
            if (tags > -1) {
                //--TAG EXISTS
                counter++;

            }
        });
        ///----<


        if (counter == dataListItems.length) {

            $(thisItem).show();
        } else {
            $(thisItem).hide();
        }

        counter = 0;


        //-- ANIMATION

        var columnCount = 6
        var leftRange = 45;
        var topRange = 162;
        var counter = 0;
        var changed = false;
        $.each(animateArray, function (index, thisItem) {

            if (counter >= columnCount) {
                topRange = 453;

            }
            if (counter >= columnCount) {
                if (!changed) {

                    leftRange = 45;
                    changed = true;
                }
            }
            console.log(counter);
            console.log(leftRange);
            $(thisItem).parent("div.rect").animate({ "left": leftRange, "top": topRange }, "slow");




            leftRange = leftRange + 121;

            counter++;
        });

    });
    
}