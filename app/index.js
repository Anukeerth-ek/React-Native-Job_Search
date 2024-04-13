import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text  } from "react-native";
import {COLORS, icons, images, SIZES} from '../constants'
import { Stack, useRouter } from "@react-navigation/native";
// import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";

const Home = ()=> {

    // const router = useRouter()

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            {/* <Stack.Screen options = {{backgroundColor: COLORS.lightWhite}}/> */}
            <Stack />
        </SafeAreaView>
    )
}

export default Home;