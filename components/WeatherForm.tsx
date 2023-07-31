import React, { useState } from "react"
import {
    Box,
    Button,
    Input,
    VStack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    NumberInput,
    NumberInputField,
    InputGroup,
    InputRightElement
} from "@chakra-ui/react"
import WeatherDisplay from "./WeatherDisplay"
import { WeatherData } from "lib/shared/models"

const WeatherForm = () => {
    const [zipcode, setZipcode] = useState<string>("")
    const [forecast, setForecast] = useState<number>(undefined)
    const [error, setError] = useState<string>("")
    const [weatherData, setWeatherData] = useState<WeatherData>(null)
    const [isLoading, setIsLoading] = useState(false) // Track loading state

    const handleZipcodeChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setZipcode(event.target.value)
    }

    const handleForecastChange = (value: string) => {
        if (value === "") {
            setForecast(0)
            return
        }
        setForecast(parseInt(value, 10))
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setError("")

        if (!zipcode) {
            setError("Please enter a zipcode")
            return
        }

        try {
            setIsLoading(true) // Start loading

            const response = await fetch(`/api/weather?zipcode=${zipcode}`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ forecast })
            })
            if (!response.ok) {
                throw new Error("Failed to fetch weather data")
            }

            const data = await response.json()
            setWeatherData(data)
        } catch (error) {
            setError("Failed to fetch weather data")
        } finally {
            setIsLoading(false) // Stop loading
        }
    }

    return (
        <Box
            as="form"
            onSubmit={handleSubmit}
            maxW="lg"
            mx="auto"
            mt={8}
            p={4}
            border="1px"
            rounded="lg"
            shadow="lg"
        >
            <VStack spacing={4}>
                <FormControl isInvalid={!!error}>
                    <FormLabel>Zipcode:</FormLabel>
                    <Input
                        type="text"
                        value={zipcode}
                        onChange={handleZipcodeChange}
                        placeholder="Enter your zipcode"
                        size="lg"
                        isDisabled={isLoading} // Disable the input during loading
                    />
                    <FormErrorMessage>{error}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!error}>
                    <FormLabel>Temperature Prediction:</FormLabel>
                    <InputGroup>
                        <NumberInput
                            size="lg"
                            placeholder="Enter a prediction for the weather"
                            onChange={handleForecastChange}
                            value={forecast}
                            max={50}
                            isDisabled={isLoading} // Disable the input during loading
                        >
                            <NumberInputField />
                        </NumberInput>
                        <InputRightElement
                            pointerEvents="none"
                            color="gray.500"
                            fontSize="lg"
                            children="°F"
                        />
                    </InputGroup>
                </FormControl>
                <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    w="full"
                    isLoading={isLoading} // Show loading indicator on the button
                    loadingText="Fetching..."
                >
                    Get Forecast
                </Button>
            </VStack>
            {weatherData && <WeatherDisplay weatherData={weatherData} />}
        </Box>
    )
}

export default WeatherForm
