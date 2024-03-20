import { View } from "react-native"; // importei do native
import { Text } from "react-native-paper"; // importei do native paper
import styles from "../config/styles";
import { useEffect } from "react";

const API_KEY = "e92dc176abd6c90271e75b1a10b4df83";
const CITY_NAME = "Joinville, SC";//peguem a de vocês


export default function TempoScreen(){
    
    useEffect(()=>{
        const fetchTempo = async () =>{
            //recebe o valor da api em texto
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`;
        // recebe o valor do api em texto
        const resposta = fetch(url, {
            // fix mime type
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
        });

            //basico de fetch json
            //transforma o texto em json
            const data = await resposta.json();
            console.log(data);
        }
        fetchTempo();
    }, []);

    return(
        <View
            style={styles.container}
        >
            <Text
                variant="bodyLarge" //variantes que só o papel possui
            >Tempo</Text>
        </View>
    )
}