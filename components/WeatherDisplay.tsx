import React from "react"
import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import { WeatherData } from "lib/shared/models"

interface WeatherDisplayProps {
    weatherData: WeatherData
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
    const {
        zipcode,
        dailyHighC,
        dailyLowC,
        dailyHighF,
        dailyLowF,
        rainfall,
        condition
    } = weatherData

    return (
        <Box
            maxW="lg"
            mx="auto"
            mt={8}
            p={4}
            border="1px"
            rounded="lg"
            shadow="lg"
        >
            <VStack spacing={4}>
                <Heading as="h2" size="lg">
                    Weather Forecast for {zipcode}
                </Heading>
                <Text fontWeight="semibold">{condition}</Text>
                <Text fontWeight="semibold">
                    Daily High: {dailyHighF}°F/{dailyHighC}°C
                </Text>
                <Text fontWeight="semibold">
                    Daily Low: {dailyLowF}°F/{dailyLowC}°C
                </Text>

                <Text fontWeight="semibold">Rainfall: {rainfall} mm</Text>
            </VStack>
        </Box>
    )
}

export default WeatherDisplay
