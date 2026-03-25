var lastCell = null; // Keep track of last cell that was played

window.addEventListener("load", function(event) {
    // Get all clickable elements
    const showNames = document.getElementsByClassName('clickable')
    // For all elements add a listener
    Array.prototype.forEach.call(showNames, function(element)
    {
        element.addEventListener('click', updatePlayer, true);
    });
});

// Player update function
function updatePlayer(event) {
    // If lastCell has been initialized, reset background
    if (lastCell != null)
    {
        lastCell.style.backgroundColor = '';
    }
    // Color the cell
    this.style.backgroundColor = 'grey';
    // Get attached name and src file
    var source_name = this.getAttribute('name')
    var source_file = this.getAttribute('src');
    // Update player name
    var file_name = document.getElementById('sampname');
    file_name.innerText = "Playing: " + source_name;
    // Get the player and set the source file
    var audio = document.getElementById('audio_ctl');
    var source = document.getElementById('source');
    source.src = source_file;
    // Auto play
    audio.load();
    audio.play();
    // Update the lastCell state
    lastCell = this;
}