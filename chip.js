function Chip(color, value) {
    this.chipCount = game.chipCount;
    this.color = color;
    this.value = value;
    this.image = "<img src ='chips/" + this.color + "-chip.png' value=" + this.value + " id= 'c-" + this.chipCount + "' class = 'chip'/>";
    $('#chip-container').append($(this.image));
    $('#c-' + this.chipCount).draggable();
    game.chipCount++;
}