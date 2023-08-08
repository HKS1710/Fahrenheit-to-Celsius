document.addEventListener("DOMContentLoaded",
    function () {

        function convertor(event) {
            {
                console.log(event);


                var cel = document.getElementById("celsius").value;
                var fer = document.getElementById("fahrenheit").value;

                if (isNaN(cel)) {
                    var message1 = "<h2>Invalid Input.</h2>";
                    document.getElementById("content").innerHTML = message1;
                    console.log(message1);
                }
                else if (cel) {
                    fer = ((9 / 5) * cel) + 32;
                    Message();
                }
                else if (fer) {
                    cel = (fer - 32) * (5 / 9);
                    Message();
                }
                else {
                    var message2 = "<h2>Enter Temprature.</h2>";
                    document.getElementById("content").innerHTML = message2;
                }
                function Message() {
                    var message3 = "<h2>" + cel + " degree Celsius is " + fer + " degree fahrenheit.</h2>";
                    document.getElementById("content").innerHTML = message3;
                    console.log(message3);
                    fahrenheit.value = fer;
                    celsius.value = cel;
                }

            }
        }
        document.querySelector("button").addEventListener("click", convertor);

    }
);