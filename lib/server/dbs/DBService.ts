import { PrismaClient as SQLClient } from "lib/server/dbs/generated/sqlclient"
import { PrismaClient as MongoClient } from "lib/server/dbs/generated/mongoclient"

import { WeatherData } from "lib/shared/models"

export class DBService {
    sqlClient = new SQLClient()
    mongoClient = new MongoClient()
    saveWeatherForecast = async (weather: WeatherData, forecast?: number) => {
        await this.sqlClient.weatherPrediction.create({
            data: {
                ...weather,
                forecast
            }
        })
        await this.mongoClient.weatherPrediction.create({
            data: {
                ...weather,
                forecast
            }
        })
    }
}
