import React, { useCallback, useState, useEffect } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { RadioButton } from "react-native-paper";
import { BarChart } from "react-native-chart-kit";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { DataTable } from "react-native-paper";

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [checked, setChecked] = React.useState("first");
  const [ischecked, setisChecked] = React.useState("third");
  const [achecked, setaChecked] = React.useState("fifth");
  const [orchecked, setorChecked] = React.useState("seven");
  const [rchecked, setrChecked] = React.useState("nine");

  const [isdays, setday] = useState(false);
  const [ismonth, setmonth] = useState(false);
  const [isRange, setRange] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  const storedata = async () => {
    try {
      await AsyncStorage.setItem(
        "@savedate",
        JSON.stringify(selectedStartDate)
      );
      await AsyncStorage.setItem("@saveinfo", JSON.stringify(checked));
      await AsyncStorage.setItem("@saveinfo4", JSON.stringify(ischecked));
      await AsyncStorage.setItem("@saveinfo3", JSON.stringify(achecked));
      await AsyncStorage.setItem("@saveinfo2", JSON.stringify(orchecked));
      await AsyncStorage.setItem("@saveinfo1", JSON.stringify(rchecked));
    } catch (e) {
      console.log(e);
    }
    useEffect(() => {
      selectedStartDate;
    });
  };
  // const getData= async()=>{
  //   try
  //  { await AsyncStorage.getItem("@saveinfo");
  //   await AsyncStorage.getItem("@saveinfo");
  //   await AsyncStorage.getItem("@saveinfo3");
  //   await AsyncStorage.getItem("@saveinfo2");
  //   await AsyncStorage.getItem("@saveinfo1");}
  // catch (e) {
  //   console.log(e);
  // }
  // useEffect(() => {
  //   selectedStartDate;
  // });

  const fetchData = () => {
    var d = new Date("January 14, 2012");
    console.log(d.toLocaleDateString());
    d.setMonth(d.getMonth() - 3);
    console.log(d.toLocaleDateString());
  };

  function handledays() {
    setday(true);
    setmonth(false);
    setRange(false);
  }

  function handlemonth() {
    setmonth(true);
    setday(false);
    setRange(false);
  }

  function handlerange() {
    setRange(true);
    setmonth(false);
    setday(false);
  }

  const onDateChange = (date, type) => {
    if (type === "END_DATE") {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        onLayout={onLayoutRootView}
      >
        <Text>Welcome to SplashScreen 👋</Text>
      </View> */}
      <View style={styles.container}>
        <Text style={styles.titleStyle}>SALAH TRACKER</Text>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={new Date(2018, 1, 1)}
          maxDate={new Date(2050, 6, 3)}
          weekdays={["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]}
          months={[
            "January",
            "Febraury",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ]}
          previousTitle="Previous"
          nextTitle="Next"
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="#66ff33"
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            fontFamily: "Cochin",
            color: "#000000",
          }}
          onDateChange={onDateChange}
        />
        <View style={styles.textStyle}>
          <Text style={styles.textStyle}>Selected Start Date :</Text>
          <Text style={styles.textStyle}>
            {selectedStartDate ? selectedStartDate.toString() : ""}
          </Text>
          <Text style={styles.textStyle}>Selected End Date :</Text>
          <Text style={styles.textStyle}>
            {selectedEndDate ? selectedEndDate.toString() : ""}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "azure",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./assets/fajar.PNG")}
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignSelf: "center",
              }}
            />

            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Image
              source={require("./assets/offered.PNG")}
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignSelf: "center",
              }}
            />

            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
            <Image
              source={require("./assets/unoffred.png")}
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignSelf: "center",
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "rgb(234, 250, 241 )",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./assets/zuhr.PNG")}
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignSelf: "center",
              }}
            />

            <RadioButton
              value="third"
              status={ischecked === "third" ? "checked" : "unchecked"}
              onPress={() => setisChecked("third")}
            />
            <Image
              source={require("./assets/offered.PNG")}
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignSelf: "center",
              }}
            />

            <RadioButton
              value="fourth"
              status={ischecked === "fourth" ? "checked" : "unchecked"}
              onPress={() => setisChecked("fourth")}
            />
            <Image
              source={require("./assets/unoffred.PNG")}
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignSelf: "center",
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "azure",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./assets/asar.PNG")}
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignSelf: "center",
              }}
            />

            <RadioButton
              value="fifth"
              status={achecked === "fifth" ? "checked" : "unchecked"}
              onPress={() => setaChecked("fifth")}
            />
            <Image
              source={require("./assets/offered.PNG")}
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignSelf: "center",
              }}
            />

            <RadioButton
              value="six"
              status={achecked === "six" ? "checked" : "unchecked"}
              onPress={() => setaChecked("six")}
            />
            <Image
              source={require("./assets/unoffred.PNG")}
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignSelf: "center",
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "rgb(234, 250, 241 )",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./assets/maghrib.PNG")}
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignSelf: "center",
              }}
            />

            <RadioButton
              value="seven"
              status={orchecked === "seven" ? "checked" : "unchecked"}
              onPress={() => setorChecked("seven")}
            />
            <Image
              source={require("./assets/offered.PNG")}
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignSelf: "center",
              }}
            />

            <RadioButton
              value="eight"
              status={orchecked === "eight" ? "checked" : "unchecked"}
              onPress={() => setorChecked("eight")}
            />
            <Image
              source={require("./assets/unoffred.PNG")}
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignSelf: "center",
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "azure",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./assets/esha.PNG")}
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignSelf: "center",
              }}
            />

            <RadioButton
              value="nine"
              status={rchecked === "nine" ? "checked" : "unchecked"}
              onPress={() => setrChecked("nine")}
            />
            <Image
              source={require("./assets/offered.PNG")}
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignSelf: "center",
              }}
            />

            <RadioButton
              value="ten"
              status={rchecked === "ten" ? "checked" : "unchecked"}
              onPress={() => setrChecked("ten")}
            />
            <Image
              source={require("./assets/unoffred.PNG")}
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignSelf: "center",
              }}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 48,
            marginBottom: 70,
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          Previous record
        </Text>
        {/* <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Reports" component={ReportsScreen} />
          </Stack.Navigator>
        </NavigationContainer> */}
        <View style={styles.screen}>
          <Button title="LAST 7 DAYS " color={"purple"} onPress={handledays} />
          <Button title="MONTHLY " color={"orange"} onPress={handlemonth} />
          <Button title="DATE RANGE " color={"maroon"} onPress={handlerange} />

          <Button title="Store Data" onPress={() => storedata} />
        </View>
        <View style={styles.MainContainer}>
          {/* javascript */}
          {isdays ? (
            <BarChart
              data={{
                labels: ["Fajar", "Zohar", "Assar", "Magrib", "Esha"],
                datasets: [{ data: [10, 20, 30, 40, 50] }],
              }}
              width={800}
              height={450}
              yAxisLabel={""}
              horizontalLabelRotation={false}
              chartConfig={{
                backgroundColor: "#1cc910",
                backgroundGradientFrom: "red",
                backgroundGradientTo: "green",

                decimalPlaces: 3,
                color: (opacity = 255) => "#ECEFF1",
                style: {
                  borderRadius: 20,
                  padding: 10,
                },
              }}
            />
          ) : null}

          {ismonth ? (
            <BarChart
              data={{
                labels: ["Fajar", "Zohar", "Assar", "Magrib", "Esha"],
                datasets: [{ data: [10, 20, 30, 40, 50] }],
              }}
              width={800}
              height={450}
              yAxisLabel={""}
              horizontalLabelRotation={false}
              chartConfig={{
                backgroundColor: "#1cc910",
                backgroundGradientFrom: "purple",
                backgroundGradientTo: "yellow",

                decimalPlaces: 3,
                color: (opacity = 255) => "#ECEFF1",
                style: {
                  borderRadius: 20,
                  padding: 10,
                },
              }}
            />
          ) : null}

          {isRange ? (
            <BarChart
              data={{
                labels: ["Fajar", "Zohar", "Assar", "Magrib", "Esha"],
                datasets: [{ data: [10, 20, 30, 40, 50] }],
              }}
              width={800}
              height={450}
              yAxisLabel={""}
              horizontalLabelRotation={false}
              chartConfig={{
                backgroundColor: "#1cc910",
                backgroundGradientFrom: "red",
                backgroundGradientTo: "blue",

                decimalPlaces: 3,
                color: (opacity = 255) => "#ECEFF1",
                style: {
                  borderRadius: 20,
                  padding: 10,
                },
              }}
            />
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "rgb(234, 250, 241)",
    padding: 30,
  },
  textStyle: {
    marginTop: 10,
    textAlign: "center",
    marginBottom: 30,
    backgroundColor: "rgb(204, 252, 240  )",
    fontFamily: "san-serif",
    fontWeight: 700,
    fontSize: 25,
    color: "orange",
  },
  titleStyle: {
    color: "purple",
    textAlign: "center",
    fontSize: 40,
    margin: 20,
    fontWeight: "900",
    fontFamily: "san-serif",
    marginBottom: "5%",
  },
  MainContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    flexDirection: "row",
    justifyContent: "space-around",
    justifyContent: "center",
    padding: 10,
  },
});
