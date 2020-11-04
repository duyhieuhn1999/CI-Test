function run(){
    var inputNumber = document.getElementById('id').value;
            var random =   Math.floor(Math.random() * 10) + 1;
            if(inputNumber == random)
            alert('Bạn đã trúng thưởng số may mắn : ' + random)
            else{
                alert('Bạn đã thất bạn! số may mắn là :' + random)
            }
    }
