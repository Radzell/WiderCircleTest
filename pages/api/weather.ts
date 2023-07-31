import { NextApiRequest, NextApiResponse } from "next"
import { DBService } from "lib/server/dbs/DBService"
import { WeatherData } from "lib/shared/models"

const weatherApiKey = process.env.WEATHER_API_KEY
const weatherApiBaseUrl = "http://api.weatherapi.com/v1"

export async function fetchWeatherData(zipcode: string): Promise<WeatherData> {
    try {
        const response = await fetch(
            `${weatherApiBaseUrl}/forecast.json?key=${weatherApiKey}&q=${zipcode}&days=1`
        )

        if (!response.ok) {
            throw new Error("Failed to fetch weather data")
        }

        const weatherData = await response.json()

        // Get today's forecast from the response
        const todayForecast = weatherData.forecast.forecastday[0]
        const { maxtemp_c, mintemp_c, mintemp_f, maxtemp_f } = todayForecast.day
        return {
            zipcode,
            dailyHighC: maxtemp_c,
            dailyLowC: mintemp_c,
            dailyHighF: maxtemp_f,
            dailyLowF: mintemp_f,
            rainfall: todayForecast.day.totalprecip_mm,
            condition: todayForecast.day.condition.text
        }
    } catch (error) {
        console.error("Error fetching weather data:", error.message)
        throw new Error("Failed to fetch weather data")
    }
}

async function saveWeatherForecast(
    weather: WeatherData,
    forecast?: number
): Promise<void> {
    try {
        const dbService = new DBService()
        await dbService.saveWeatherForecast(weather, forecast)
    } catch (error) {
        console.error("Error saving forecast:", error.message)
        throw new Error("Failed to save forecast")
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { forecast } = req.body as {
            forecast?: number
        }
        try {
            const { zipcode } = req.query as { zipcode: string }
            const weatherData = await fetchWeatherData(zipcode)
            await saveWeatherForecast(weatherData, forecast)
            res.status(200).json(weatherData)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" })
    }
}
