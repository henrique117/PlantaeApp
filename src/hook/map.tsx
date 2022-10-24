import * as Location from "expo-location";

interface IMap {
    lat: number
    long: number
}

async function useMap(): Promise<IMap | null> {

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
        console.log("A permissão para acessar a localização foi negada.");
        return null;
    }
    Location.setGoogleApiKey("AIzaSyASkiDH2uoIox33gZh88LUNFZf6KOz4th0");

    let location = await Location.getCurrentPositionAsync();
    return { lat: location.coords.latitude, long: location.coords.longitude }

}

export { useMap, IMap };