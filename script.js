var sections = document.querySelectorAll('.section');

function hideAllSections()
{
    for (var i = 0; i < sections.length; i++)
    {
        sections[i].style.display = 'none';
    }
}

function showSection(index)
{
    hideAllSections();
    var section = sections[index];
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function ()
{
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function ()
{
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event)
{
    if (event.target == modal)
    {
        modal.style.display = "none";
    }
}

