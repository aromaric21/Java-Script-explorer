function calculateSum(){
    const X = parseInt(document.getElementById('field1').value);
    const Y = parseInt(document.getElementById('field2').value);
    const result = document.getElementById('result');

    console.log(X + Y);
    result.value = X + Y;
}