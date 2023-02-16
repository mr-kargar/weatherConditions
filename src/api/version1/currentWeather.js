
const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const access_key = 'LRULQKT2486G9GEDZTLXKT6BZ';

export async function currentWeather(city) {

    if (city !== '') {
        try {
            const responseCurrentWeather = await fetch(url + `${city}?unitGroup=metric&key=${access_key}`,
                {
                    Headers: { 'content-Type': 'application/json' }
                });

            const resultWeather = await responseCurrentWeather.json();
            return resultWeather;

        } catch (e) {
            return 1
        }

    } else {
        return false
    }

}



