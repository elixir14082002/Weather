let city = "";
        let info = document.getElementById("data");
        let cityName = document.getElementById("city_name");
        let cityDet = document.getElementById("city_det");
        let realData = "";
        const weather = async () => {
            city = document.getElementById("cityReqd").value;
            console.log(city);
            if (city == "") {
                info.innerHTML = `Enter the name first`;
            }
            else {

                try {
                    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cf89e22ab8253de8f163d75f4297cd0c`;
                    let data = await fetch(url);
                    let realData = await data.json();
                    let kelvinVal = realData.main.temp;
                    let cel = ((((1.8 * (kelvinVal - 273)) + 32) - 32) / 9) * 5;
                    info.innerHTML = `${cel.toFixed(2)}`;
                    cityName.innerHTML = `${city}`;
                    cityDet.innerHTML = `${realData.id}`;
                }
                catch {
                    info.innerHTML = `Enter the name properly`;
                }
            }
        }